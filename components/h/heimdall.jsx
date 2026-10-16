import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iemmtbc_j.css';
import '../../css/j/jr2o5bbib.css';

const viewBox = {"width":346,"height":434};
const content = `<path class="iemmtbc_j"/><path class="cls-1 jr2o5bbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:heimdall"} {...others} />);
}

export default Component;
