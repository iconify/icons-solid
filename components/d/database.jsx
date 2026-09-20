import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/a/aayufjbdt.css';
import '../../css/z/zzkgp--je.css';
import '../../css/g/gg_6g8wpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><ellipse class="aayufjbdt"/><path class="zzkgp--je"/><path class="gg_6g8wpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:database"} {...others} />);
}

export default Component;
