import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zazl653sh {
  fill: currentColor;
  d: path("M228 160V96a12 12 0 0 0-12-12h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12zm-63 44L52 91V69l135 135ZM69 52h22l113 113v22Zm135 79l-23-23h23Zm-56-56l-23-23h23Zm-96 50l23 23H52Zm56 56l23 23h-23Z");
}
</style><path class="zazl653sh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:unite-square-bold"} {...others} />);
}

export default Component;
