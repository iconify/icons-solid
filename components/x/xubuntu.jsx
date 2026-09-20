import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpxp0oysk.css';
import '../../css/l/l6_aktb5q.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vpxp0oysk"/><path class="l6_aktb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:xubuntu"} {...others} />);
}

export default Component;
