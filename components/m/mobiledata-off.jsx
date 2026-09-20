import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mxwmbbc9u {
  fill: currentColor;
  d: path("M19.685 21.1L9.5 10.916v7.157l2.089-2.089l.719.708L9 20l-3.308-3.308l.72-.707L8.5 18.073V9.915L2.861 4.278l.708-.708l16.823 16.823zM15.5 12.65l-1-1V5.916l-2.1 2.1l-.708-.708L15 4l3.308 3.308l-.708.708l-2.1-2.1z");
}
</style><path class="mxwmbbc9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobiledata-off"} {...others} />);
}

export default Component;
