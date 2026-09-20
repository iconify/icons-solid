import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fgk4y8bzi.css';
import '../../css/w/wx459cbmv.css';
import '../../css/p/pfzwxhvsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="fgk4y8bzi"/><path class="wx459cbmv"/><path class="pfzwxhvsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:wetv-logo"} {...others} />);
}

export default Component;
