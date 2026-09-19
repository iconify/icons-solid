import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfwf8-3ye.css';
import '../../css/a/az0bq2bba.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wfwf8-3ye"/><path class="az0bq2bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:approval"} {...others} />);
}

export default Component;
