import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t2femrb6p {
  fill: currentColor;
  d: path("M18 15v-2h3v2zm0 4v-2h3v2zm-6 1v-2h-2v-4h2v-2h5v8zm-9-3V9h7V6H4V4h8v7H5v4h4v2z");
}
</style><path class="t2femrb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:electrical-services-outline-sharp"} {...others} />);
}

export default Component;
