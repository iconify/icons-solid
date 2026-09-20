import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq-ess6cm.css';
import '../../css/h/h5ci0qb1w.css';
import '../../css/f/fd5oc7b6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iq-ess6cm"/><path class="h5ci0qb1w"/><path class="fd5oc7b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:zoom-in-magnifier-1"} {...others} />);
}

export default Component;
