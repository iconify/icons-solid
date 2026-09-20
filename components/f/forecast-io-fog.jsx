import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy7btdbpr.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="wy7btdbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:forecast-io-fog"} {...others} />);
}

export default Component;
