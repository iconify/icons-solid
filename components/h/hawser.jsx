import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adpj7nbwk.css';
import '../../css/w/wp44u6bht.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="adpj7nbwk"/><path class="wp44u6bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hawser"} {...others} />);
}

export default Component;
