import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u035nnboi.css';
import '../../css/o/oj8vp5bxo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u035nnboi"/><path class="oj8vp5bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:velero"} {...others} />);
}

export default Component;
