import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cd2prfbuv {
  fill: currentColor;
  d: path("M2 20V4h5.325v16zm7.35 0V4h5.325v16zm7.325 0V4H22v16z");
}
</style><path class="cd2prfbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-week-sharp"} {...others} />);
}

export default Component;
