import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0phu2bbs.css';
import '../../css/q/qx3xlwd4u.css';
import '../../css/a/a96k7rbus.css';
import '../../css/x/xsz6yoa7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s0phu2bbs"><circle class="qx3xlwd4u"/><circle class="a96k7rbus"/><path class="xsz6yoa7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:category-bold"} {...others} />);
}

export default Component;
