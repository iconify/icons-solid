import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nid-gh7jy {
  fill: currentColor;
  d: path("M6 21v-2h12v2z");
}
</style><path class="nid-gh7jy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:minimize-sharp"} {...others} />);
}

export default Component;
