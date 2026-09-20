import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":257};
const content = `<style>.aul6f9dyw {
  fill: var(--svg-color--f60, #f60);
  d: path("M245.734 102.437h-81.911a10.2 10.2 0 0 1-10.263-10.263v-81.91a10.2 10.2 0 0 0-10.263-10.2h-30.66a10.2 10.2 0 0 0-10.264 10.2v81.91a10.2 10.2 0 0 1-10.263 10.263H61.45a10.2 10.2 0 0 1-10.263-10.263v-81.91A10.2 10.2 0 0 0 40.924 0H10.199A10.2 10.2 0 0 0 0 10.263v235.535a10.2 10.2 0 0 0 10.263 10.263h235.47a10.2 10.2 0 0 0 10.264-10.263V112.893a10.2 10.2 0 0 0-10.263-10.456m-41.18 86.979a15.33 15.33 0 0 1-15.33 15.394h-20.526a15.33 15.33 0 0 1-15.33-15.394v-20.462a15.33 15.33 0 0 1 15.33-15.394h20.525a15.33 15.33 0 0 1 15.33 15.394z");
}
</style><path class="aul6f9dyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:rabbitmq-icon"} {...others} />);
}

export default Component;
