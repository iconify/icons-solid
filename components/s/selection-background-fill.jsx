import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xhacgihmw {
  fill: currentColor;
  d: path("M72 112h72v72H72Zm152-64v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M96 72a8 8 0 0 0 16 0h16a8 8 0 0 0 0-16h-16a16 16 0 0 0-16 16m64 40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h72a16 16 0 0 0 16-16Zm40 16a8 8 0 0 0-16 0v16a8 8 0 0 0 0 16a16 16 0 0 0 16-16Zm0-56a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0Z");
}
</style><path class="xhacgihmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:selection-background-fill"} {...others} />);
}

export default Component;
