import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vtojwjxyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.489 9.823c-.21 3.043-3.407 4.677-8.239 4.677c-5 0-8.25-1.75-8.25-5h9.2m5.3 0H19m-16 0c0-4 3-7 7-7v7m-6.25 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm10.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM15 2.75l3.25 2l3.25-2v5l-3.25-2l-3.25 2Z");
}
</style><path class="vtojwjxyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:paternity-leave"} {...others} />);
}

export default Component;
