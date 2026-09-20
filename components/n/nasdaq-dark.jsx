import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxgzcwb7g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nxgzcwb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nasdaq-dark"} {...others} />);
}

export default Component;
