import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc8hhiglu.css';
import '../../css/e/e_vt-db2k.css';
import '../../css/z/zp9u2wb6f.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="sc8hhiglu"/><path class="e_vt-db2k"/><path class="zp9u2wb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:loop"} {...others} />);
}

export default Component;
