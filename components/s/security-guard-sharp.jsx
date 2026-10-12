import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rdrzisb3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.45 7.03l.35-1.31L8 5l.72-.22l2.56-.81l.72-.22l.72.22l2.56.81L16 5l.2.72l.35 1.31l.2.72h-9.5zm2.2.72a3.25 3.25 0 1 0 4.7 0Zm-4.4 13.5v-4.5h13.5v4.5Z");
}
</style><path class="rdrzisb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:security-guard-sharp"} {...others} />);
}

export default Component;
