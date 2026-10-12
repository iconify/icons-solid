import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q9zb52b9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25c1.5 1.5 2.25 2.75 2.25 4a2.25 2.25 0 0 1-4.5 0c0-1.25.75-2.5 2.25-4Zm-4 9h8a4 3 0 0 1-8 0Zm-5.25 5.5h18.5v3H2.75z");
}
</style><path class="q9zb52b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:puja-thali-sharp"} {...others} />);
}

export default Component;
