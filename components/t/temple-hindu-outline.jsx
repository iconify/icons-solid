import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t-c-aqbcc {
  fill: currentColor;
  d: path("M2 22V11h2v2h2l2.975-9.875V1h2v2H13V1h2v2l3 10h2v-2h2v11h-9v-5h-2v5zm6.7-11h6.6l-.6-2H9.3zm1.2-4h4.2l-.6-2h-3zM4 20h5v-5h6v5h5v-5h-3.5l-.6-2H8.1l-.6 2H4zm8-7.5");
}
</style><path class="t-c-aqbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:temple-hindu-outline"} {...others} />);
}

export default Component;
