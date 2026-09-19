import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az58icbrr.css';
import '../../css/e/eezgffbcj.css';
import '../../css/z/z9r7tyb5i.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="az58icbrr"/><circle class="eezgffbcj"/><path class="z9r7tyb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:medal-outline"} {...others} />);
}

export default Component;
