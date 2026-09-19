import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo-s3h8ki.css';
import '../../css/z/zfwtadppq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oo-s3h8ki"/><path class="zfwtadppq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:hospital-1"} {...others} />);
}

export default Component;
