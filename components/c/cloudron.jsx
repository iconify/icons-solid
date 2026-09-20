import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oeiv6oacw.css';
import '../../css/c/c2jt5db4x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oeiv6oacw"/><path class="c2jt5db4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloudron"} {...others} />);
}

export default Component;
