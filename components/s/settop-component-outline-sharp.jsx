import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dzbiw1xsm {
  fill: currentColor;
  d: path("M2 17V7h20v10zm2-2h16V9H4zm1-2h6v-2H5zm8 0h2v-2h-2zm3 0h2v-2h-2zM4 15V9z");
}
</style><path class="dzbiw1xsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:settop-component-outline-sharp"} {...others} />);
}

export default Component;
