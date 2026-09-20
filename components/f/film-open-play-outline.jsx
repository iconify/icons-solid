import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwh1grb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwh1grb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:film-open-play-outline"} {...others} />);
}

export default Component;
