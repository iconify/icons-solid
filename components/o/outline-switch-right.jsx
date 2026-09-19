import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ea61t7v1f {
  fill: currentColor;
  d: path("M15.5 15.38V8.62L18.88 12zM14 19l7-7l-7-7zm-4 0V5l-7 7z");
}
</style><path class="ea61t7v1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-switch-right"} {...others} />);
}

export default Component;
