import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0zzatbid {
  fill: currentColor;
  d: path("M23 3H1v18h22zM5 17l3.5-4.5l2.5 3.01L14.5 11l4.5 6z");
}
</style><path class="d0zzatbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-photo-size-select-actual"} {...others} />);
}

export default Component;
