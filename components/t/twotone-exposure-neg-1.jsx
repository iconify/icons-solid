import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nos1pgduy {
  fill: currentColor;
  d: path("M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z");
}
</style><path class="nos1pgduy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-exposure-neg-1"} {...others} />);
}

export default Component;
