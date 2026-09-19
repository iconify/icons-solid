import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8twl3rcu {
  fill: currentColor;
  d: path("M12 8V4l8 8l-8 8v-4H4V8z");
}
</style><path class="f8twl3rcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-forward"} {...others} />);
}

export default Component;
