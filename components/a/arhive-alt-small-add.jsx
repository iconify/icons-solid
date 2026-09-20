import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qcs_7qqsg.css';
import '../../css/y/yury52rfs.css';
import '../../css/j/jdg3xy5_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="qcs_7qqsg"/><path class="yury52rfs"/><path class="jdg3xy5_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-small-add"} {...others} />);
}

export default Component;
