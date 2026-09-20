import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmcnvjbeo {
  fill: currentColor;
  d: path("M16.45 13.6L8 5.15V5l11 7zm3.3 9L13 15.8L8 19v-8.2L1.4 4.2l1.4-1.4l18.4 18.4z");
}
</style><path class="tmcnvjbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:play-disabled-sharp"} {...others} />);
}

export default Component;
