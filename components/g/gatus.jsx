import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt_dcj1zc.css';
import '../../css/v/vd8fnkbgj.css';
import '../../css/i/i424kzrcq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jt_dcj1zc"/><path class="vd8fnkbgj"/><path class="i424kzrcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gatus"} {...others} />);
}

export default Component;
