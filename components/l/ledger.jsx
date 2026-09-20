import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kksubrb8j {
  d: path("M3 15.5v4.6h6.77v-1.02H3.987V15.5zm17.014 0v3.58h-5.785v1.02H21v-4.6zM9.78 8.5v7h4.45v-.92h-3.463V8.5zM3 3.9v4.6h.986V4.92h5.785V3.9zm11.23 0v1.02h5.784V8.5H21V3.9z");
}
</style><path class="kksubrb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ledger"} {...others} />);
}

export default Component;
