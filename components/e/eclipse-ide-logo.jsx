import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wjvhd3bnr.css';
import '../../css/z/z12o2dzxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wjvhd3bnr"/><path class="z12o2dzxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:eclipse-ide-logo"} {...others} />);
}

export default Component;
