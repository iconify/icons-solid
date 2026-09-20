import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipg2vo4ij.css';
import '../../css/r/r5kkk1v3q.css';
import '../../css/k/kb0y4vb8f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ipg2vo4ij"/><path class="r5kkk1v3q"/><path class="kb0y4vb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minthcm-dark"} {...others} />);
}

export default Component;
