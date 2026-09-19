import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye_oo_m6x.css';
import '../../css/a/ab89kobbd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ye_oo_m6x"/><path class="ab89kobbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:photo-album"} {...others} />);
}

export default Component;
