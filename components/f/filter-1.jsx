import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwhfo1osp.css';
import '../../css/n/ndxwzp4ad.css';
import '../../css/u/uiao42kiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xwhfo1osp"/><path class="ndxwzp4ad"/><path class="uiao42kiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:filter-1"} {...others} />);
}

export default Component;
