import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gf18ytbxv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.37 5l1.51.88l.87.5v3.75l-.87.5l-1.51.87l-.87.5l-.87-.5l-1.51-.87l-.87-.5V6.38l.87-.5L6.63 5l.87-.5zm9 0l1.51.88l.87.5v3.75l-.87.5l-1.51.87l-.87.5l-.87-.5l-1.51-.87l-.87-.5V6.38l.87-.5L15.63 5l.87-.5zm-4.5 7.75l1.51.88l.87.5v3.75l-.87.5l-1.51.87l-.87.5l-.87-.5l-1.51-.87l-.87-.5v-3.75l.87-.5l1.51-.88l.87-.5z");
}
</style><path class="gf18ytbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:microservice-sharp"} {...others} />);
}

export default Component;
