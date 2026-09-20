import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.brxcolvah {
  fill: currentColor;
  d: path("M2 17V7h20v10zm3-4h6v-2H5zm8 0h2v-2h-2zm3 0h2v-2h-2z");
}
</style><path class="brxcolvah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:settop-component-sharp"} {...others} />);
}

export default Component;
