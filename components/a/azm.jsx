import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6d7zcb1g {
  fill: currentColor;
  d: path("m16 17l4-4V4h-9L7 8h9zm-6 6l4-4v-9H5l-4 4h9z");
}
</style><path class="m6d7zcb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:azm"} {...others} />);
}

export default Component;
