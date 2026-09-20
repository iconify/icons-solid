import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhlt42bok {
  fill: currentColor;
  d: path("M14 22v-3h8v3zM2 20V4h20v7h-2V6h-7v5h-2v9zm10.8-2l1-5h8.4l1 5zM5 16h5v-2H5zm0-3h5v-2H5zm0-3h5V8H5zm9 0V8h5v2z");
}
</style><path class="fhlt42bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:two-pager-store-sharp"} {...others} />);
}

export default Component;
