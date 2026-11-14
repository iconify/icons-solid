import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v550m8b4u.css';
import '../../css/s/saoofvbtd.css';
import '../../css/s/s00tgrb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="v550m8b4u"/><path class="saoofvbtd"/><path class="s00tgrb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:fuel-station-charging"} {...others} />);
}

export default Component;
