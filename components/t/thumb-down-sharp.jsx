import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wdt8db1ag {
  fill: currentColor;
  d: path("M2 15v-3.17L5.304 4h11.042v11l-6.269 6.192l-.87-.869L10.335 15zm15.346 0V4H21v11z");
}
</style><path class="wdt8db1ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:thumb-down-sharp"} {...others} />);
}

export default Component;
