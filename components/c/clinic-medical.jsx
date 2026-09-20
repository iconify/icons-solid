import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pknpwpb5q.css';
import '../../css/l/l2nst-b0v.css';
import '../../css/k/ks5mnsbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pknpwpb5q"/><path class="l2nst-b0v"/><path class="ks5mnsbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:clinic-medical"} {...others} />);
}

export default Component;
