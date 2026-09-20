import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tzrvxn7px {
  fill: var(--svg-color--474747, #474747);
  d: path("M3 7.929h18l-6.6 8.143l-2.4-2.91l-2.4 2.91zm11.417 6l4.226-4.715H5.357l4.226 4.715L12 11.357z");
}
</style><path class="tzrvxn7px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:wiken"} {...others} />);
}

export default Component;
