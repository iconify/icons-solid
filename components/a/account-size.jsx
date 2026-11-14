import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.heqbokb5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V4A1.5 1.5 0 0 1 5 2.5h5.5A1.5 1.5 0 0 1 12 4v5h7a1.5 1.5 0 0 1 1.5 1.5v11ZM12 9v12.5M6.5 7H9m-2.5 4H9m-2.5 4H9m6-2h2.5M15 17h2.5");
}
</style><path class="heqbokb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:account-size"} {...others} />);
}

export default Component;
