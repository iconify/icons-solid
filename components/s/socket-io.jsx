import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp0bzp2ut.css';
import '../../css/e/epusddcgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b tp0bzp2ut"/><path class="b epusddcgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:socket-io"} {...others} />);
}

export default Component;
