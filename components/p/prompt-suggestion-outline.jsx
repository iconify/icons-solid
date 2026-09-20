import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8u4do2yo {
  fill: currentColor;
  d: path("m14.942 18l-.707-.694l3.844-3.768H7.827q-1.586 0-2.707-1.091T4 9.769t1.12-2.678T7.827 6h.462v1h-.462q-1.166 0-1.996.802T5 9.769t.83 1.967t1.997.802h10.252l-3.844-3.792l.707-.688L20 13.038z");
}
</style><path class="f8u4do2yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:prompt-suggestion-outline"} {...others} />);
}

export default Component;
