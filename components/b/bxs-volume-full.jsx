import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrbueyx2o.css';
import '../../css/g/gmoythb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrbueyx2o"/><path class="gmoythb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-volume-full"} {...others} />);
}

export default Component;
