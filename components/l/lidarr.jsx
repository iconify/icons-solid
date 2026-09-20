import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkl81gx0s.css';
import '../../css/e/eevvws5ct.css';
import '../../css/h/hol_21ctj.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="nkl81gx0s"/><path class="eevvws5ct"/><path class="hol_21ctj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lidarr"} {...others} />);
}

export default Component;
