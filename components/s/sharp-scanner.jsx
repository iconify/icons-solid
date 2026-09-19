import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ntt3ssblb {
  fill: currentColor;
  d: path("m4.2 5l-.7 1.9L17.6 12H3v8h18v-8.86zM7 17H5v-2h2zm12 0H9v-2h10z");
}
</style><path class="ntt3ssblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-scanner"} {...others} />);
}

export default Component;
