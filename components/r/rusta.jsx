import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltgkmpbdc.css';
import '../../css/f/flakb15jf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ltgkmpbdc"/><path class="flakb15jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rusta"} {...others} />);
}

export default Component;
