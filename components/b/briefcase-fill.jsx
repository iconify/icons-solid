import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.hl7q2xacx {
  fill: currentColor;
  d: path("M152 112a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m80-40v128a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16M96 56h64v-8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8Zm120 57.61V72H40v41.61A184 184 0 0 0 128 136a184 184 0 0 0 88-22.39");
}
</style><path class="hl7q2xacx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:briefcase-fill"} {...others} />);
}

export default Component;
