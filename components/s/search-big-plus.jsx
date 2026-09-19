import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd6gj6bbb.css';
import '../../css/g/gdq0r_bis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pd6gj6bbb"/><path class="gdq0r_bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:search-big-plus"} {...others} />);
}

export default Component;
