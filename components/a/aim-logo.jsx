import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/o5t9u752s.css';
import '../../css/n/ndy1iukod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="o5t9u752s"/><path class="ndy1iukod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:aim-logo"} {...others} />);
}

export default Component;
