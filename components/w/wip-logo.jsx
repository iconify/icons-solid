import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/y/ysq-302mm.css';
import '../../css/z/zr06klb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ysq-302mm"/><path class="zr06klb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:wip-logo"} {...others} />);
}

export default Component;
