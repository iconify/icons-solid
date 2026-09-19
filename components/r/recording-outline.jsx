import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze2v6yb1y.css';
import '../../css/s/sh_nibbxh.css';
import '../../css/t/tznu3_bdm.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ze2v6yb1y"/><circle class="sh_nibbxh"/><path class="tznu3_bdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:recording-outline"} {...others} />);
}

export default Component;
