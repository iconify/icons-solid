import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wvr8hbq-j {
  fill: currentColor;
  d: path("M22.368 4a2.5 2.5 0 0 0-2.415 1.856L10.58 41H5.5a1.5 1.5 0 0 0 0 3h37a1.5 1.5 0 1 0 0-3h-5.08L28.046 5.856A2.5 2.5 0 0 0 25.632 4zm-8.682 37l1.866-7H27.5a1.5 1.5 0 0 0 0-3H16.352l1.067-4H25.5a1.5 1.5 0 0 0 0-3h-7.28l4.532-17h2.496l9.066 34z");
}
</style><path class="wvr8hbq-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:road-cone-48-regular"} {...others} />);
}

export default Component;
