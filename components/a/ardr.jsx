import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abg5cejrw {
  fill: var(--svg-color--3c87c7, #3c87c7);
  d: path("m11.892 14.403l1.593 2.064l-4.635 3.127zM12 4.406L14.457 8.4L7.905 19.594H3zm0 8.79l3.276-2.393L21 19.593h-4.086z");
}
</style><path class="abg5cejrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ardr"} {...others} />);
}

export default Component;
