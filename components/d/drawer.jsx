import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnhtjtfld.css';
import '../../css/o/ovp4s65sf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nnhtjtfld"/><path class="ovp4s65sf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:drawer"} {...others} />);
}

export default Component;
