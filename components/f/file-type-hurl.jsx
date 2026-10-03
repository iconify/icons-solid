import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.rrvy06cly {
  fill: var(--svg-color--ff0288, #ff0288);
  d: path("M3.11 8.67h20.16V4.36L30 10.64l-6.74 6.28v-4.06H3.12zM28.9 19.4H8.73v-4.32L2 21.36l6.74 6.28V23.6h20.15z");
}
</style><path class="rrvy06cly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-hurl"} {...others} />);
}

export default Component;
