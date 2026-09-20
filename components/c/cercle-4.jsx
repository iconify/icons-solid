import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_h9vnu3r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n_h9vnu3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:cercle-4"} {...others} />);
}

export default Component;
