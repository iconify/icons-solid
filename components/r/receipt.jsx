import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfmcxfo2r.css';
import '../../css/r/rt4k2lbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zfmcxfo2r"/><path class="rt4k2lbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:receipt"} {...others} />);
}

export default Component;
