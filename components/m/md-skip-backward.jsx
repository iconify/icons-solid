import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t__y3ywkr.css';
import '../../css/o/ocjdsognq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t__y3ywkr"/><path class="ocjdsognq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-skip-backward"} {...others} />);
}

export default Component;
