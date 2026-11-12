import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fztcq4amu.css';
import '../../css/n/nqloolbrw.css';
import '../../css/i/ixhapwbfk.css';
import '../../css/l/lp5di2bvu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fztcq4amu"/><path class="nqloolbrw"/><path class="ixhapwbfk"/><path class="lp5di2bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ties-link-sharing-dark"} {...others} />);
}

export default Component;
