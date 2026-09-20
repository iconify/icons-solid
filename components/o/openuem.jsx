import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqzar5xlv.css';
import '../../css/e/eo4l80r5n.css';
import '../../css/n/nd0_hkbiv.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="zqzar5xlv"/><path class="eo4l80r5n"/><path class="nd0_hkbiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openuem"} {...others} />);
}

export default Component;
