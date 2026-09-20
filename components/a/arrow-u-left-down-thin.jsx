import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mc0m_1psp {
  fill: currentColor;
  d: path("M204 88v88a4 4 0 0 1-8 0V88a52 52 0 0 0-104 0v126.34l41.17-41.17a4 4 0 0 1 5.66 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L84 214.34V88a60 60 0 0 1 120 0");
}
</style><path class="mc0m_1psp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-left-down-thin"} {...others} />);
}

export default Component;
