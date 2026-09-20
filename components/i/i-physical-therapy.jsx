import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_j3ow9vl.css';
import '../../css/o/o0ujm8bpz.css';
import '../../css/s/s3nxbqbxz.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="c_j3ow9vl"/><path class="o0ujm8bpz"/><path class="s3nxbqbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-physical-therapy"} {...others} />);
}

export default Component;
