import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj_ed3blt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sj_ed3blt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:alternativeto-dark"} {...others} />);
}

export default Component;
