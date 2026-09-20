import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt65rufct.css';
import '../../css/l/l_uk_bbco.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qt65rufct"/><path class="l_uk_bbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onedrive-2018-dark"} {...others} />);
}

export default Component;
