import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st9o-6h2k.css';
import '../../css/l/lgnrw_bhn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="st9o-6h2k"/><path class="lgnrw_bhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-down-black-arrow"} {...others} />);
}

export default Component;
