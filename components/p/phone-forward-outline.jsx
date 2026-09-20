import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmsq6ex-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmsq6ex-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:phone-forward-outline"} {...others} />);
}

export default Component;
