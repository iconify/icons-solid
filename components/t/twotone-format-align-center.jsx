import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tas-8mbbg {
  fill: currentColor;
  d: path("M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z");
}
</style><path class="tas-8mbbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-format-align-center"} {...others} />);
}

export default Component;
