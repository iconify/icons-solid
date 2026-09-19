import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq_ba2bfa.css';
import '../../css/a/ahe_qiacf.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="iq_ba2bfa"/><path clip-rule="evenodd" class="ahe_qiacf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:ipad"} {...others} />);
}

export default Component;
