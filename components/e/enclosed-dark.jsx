import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hseq8db_g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hseq8db_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:enclosed-dark"} {...others} />);
}

export default Component;
