import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gimyqk3vk {
  fill: currentColor;
  d: path("m20 12l-8-8v4H4v8h8v4zM6 14v-4h8V8.83L17.17 12L14 15.17V14z");
}

.nyvu5hb6h {
  fill: currentColor;
  d: path("M14 14v1.17L17.17 12L14 8.83V10H6v4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="nyvu5hb6h"/><path class="gimyqk3vk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-forward"} {...others} />);
}

export default Component;
