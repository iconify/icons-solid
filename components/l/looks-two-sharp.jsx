import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wocj8g3zg {
  fill: currentColor;
  d: path("M9 17h6v-2h-4v-2h4V7H9v2h4v2H9zm-6 4V3h18v18z");
}
</style><path class="wocj8g3zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-two-sharp"} {...others} />);
}

export default Component;
