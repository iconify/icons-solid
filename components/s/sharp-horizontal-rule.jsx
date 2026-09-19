import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1e067yag {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 11h16v2H4z");
}
</style><path class="e1e067yag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-horizontal-rule"} {...others} />);
}

export default Component;
