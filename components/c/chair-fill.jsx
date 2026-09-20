import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.givlg7brg {
  fill: currentColor;
  d: path("M208 136h-32v-32h16a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h16v32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h8v40a8 8 0 0 0 16 0v-40h112v40a8 8 0 0 0 16 0v-40h8a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16m-48 0H96v-32h64Z");
}
</style><path class="givlg7brg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chair-fill"} {...others} />);
}

export default Component;
