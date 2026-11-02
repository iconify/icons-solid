import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ijp6pjbsj {
  fill: currentColor;
  d: path("M16 22H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1h1a1 1 0 0 1 0 2h-1v6h1a1 1 0 0 1 0 2h-1v1a4 4 0 0 1-4 4M8 10a4 4 0 1 0 8 0a4 4 0 0 0-8 0m-.858 9.808c.27.127.56.193.858.192h8c.298 0 .589-.064.858-.192a5.003 5.003 0 0 0-9.716 0");
}
</style><path class="ijp6pjbsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:contacts-fill-round"} {...others} />);
}

export default Component;
