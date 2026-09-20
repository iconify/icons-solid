import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6jf7lbsd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t6jf7lbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:caderno-dark"} {...others} />);
}

export default Component;
