import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqf2hfhaf {
  fill: currentColor;
  d: path("M14 8.83L17.17 12L14 15.17V14H6v-4h8zM12 4v4H4v8h8v4l8-8z");
}
</style><path class="dqf2hfhaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-forward"} {...others} />);
}

export default Component;
