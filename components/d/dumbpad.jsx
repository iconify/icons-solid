import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9_1ckzyh.css';
import '../../css/z/zo4u7dbqx.css';
import '../../css/e/egb1_lbof.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="h9_1ckzyh"/><path class="zo4u7dbqx"/><path class="egb1_lbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbpad"} {...others} />);
}

export default Component;
