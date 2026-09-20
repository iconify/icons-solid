import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zmqhmkbct {
  fill: currentColor;
  d: path("M20.423 21.839L15.585 17H6.5V7.916L2.162 3.577l.707-.708l18.262 18.262zM3.5 20V6.616h1V19h12.385v1zm16.142-3.183L8.825 6H19.5V4H7.52v.694l-.837-.836V3H20.5v13.817z");
}
</style><path class="zmqhmkbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ad-group-off-sharp"} {...others} />);
}

export default Component;
