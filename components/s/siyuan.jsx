import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2oc4mbya.css';
import '../../css/y/ye2ymf1gu.css';
import '../../css/t/tu7ylzb3j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f2oc4mbya"/><path class="ye2ymf1gu"/><path class="tu7ylzb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:siyuan"} {...others} />);
}

export default Component;
