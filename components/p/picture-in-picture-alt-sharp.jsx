import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jk0i7owuz {
  fill: currentColor;
  d: path("M3 19V5h18v14zm8.308-2.039H19V11.27h-7.692zm3.846-2.845");
}
</style><path class="jk0i7owuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-alt-sharp"} {...others} />);
}

export default Component;
