import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gbzaribtb {
  fill: currentColor;
  d: path("M6.616 21q-.667 0-1.141-.462T5 19.442V8.404q0-1.27.85-2.221T8 5.053V3h2v2h4V3h2v2.054q1.3.177 2.15 1.129t.85 2.22v11.04q0 .632-.475 1.095t-1.14.462zm8.5-5.423h1v-2.923H7.885v1h7.23z");
}
</style><path class="gbzaribtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:backpack"} {...others} />);
}

export default Component;
