import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.igzb9qbln {
  fill: currentColor;
  d: path("M5.154 15.5v-7h1v6h3v1zm6.577 0v-6h-2v-1h5v1h-2v6zm4.769 0v-7h4v1h-3v2h3v1h-3v2h3v1z");
}
</style><path class="igzb9qbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:lte-mobiledata"} {...others} />);
}

export default Component;
