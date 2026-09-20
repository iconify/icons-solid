import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk1mbvbfk.css';
import '../../css/b/b4-fwcc_a.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="yk1mbvbfk"/><path class="b4-fwcc_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-imaging-alternative-mri"} {...others} />);
}

export default Component;
