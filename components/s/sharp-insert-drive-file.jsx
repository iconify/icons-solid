import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ynpw5e4mx {
  fill: currentColor;
  d: path("M4.01 2L4 22h16V8l-6-6zM13 9V3.5L18.5 9z");
}
</style><path class="ynpw5e4mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-insert-drive-file"} {...others} />);
}

export default Component;
