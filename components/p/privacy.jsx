import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9t5qgbnj.css';
import '../../css/u/uqsh6ibhf.css';
import '../../css/t/twp4zob4x.css';
import '../../css/v/vox0oqb1v.css';
import '../../css/q/qeol496zl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x9t5qgbnj"/><path class="uqsh6ibhf"/><circle class="twp4zob4x"/><circle class="vox0oqb1v"/><circle class="qeol496zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:privacy"} {...others} />);
}

export default Component;
