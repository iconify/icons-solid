import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pbvoa2b5u {
  fill: currentColor;
  d: path("M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.96 8.99a.5.5 0 0 0 .91 0l.63-1.4l1.4-.63a.5.5 0 0 0 0-.91l-1.4-.63l-.63-1.4a.5.5 0 0 0-.91 0l-.63 1.4l-1.4.63a.5.5 0 0 0 0 .91l1.4.63zm2.7-4.56c.1.22.42.22.52 0l.36-.8l.8-.36c.22-.1.22-.42 0-.52l-.8-.36l-.36-.8a.287.287 0 0 0-.52 0l-.36.8l-.8.36c-.22.1-.22.42 0 .52l.8.36z");
}
</style><path class="pbvoa2b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-smart-button"} {...others} />);
}

export default Component;
