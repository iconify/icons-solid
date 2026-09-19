import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcgo9i_5e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qcgo9i_5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:inspire"} {...others} />);
}

export default Component;
