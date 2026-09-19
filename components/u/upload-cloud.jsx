import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4sth9bce.css';
import '../../css/k/kttmg1byv.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="d4sth9bce"/><path class="kttmg1byv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:upload-cloud"} {...others} />);
}

export default Component;
