import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/guil9kbnw.css';
import '../../css/x/xl4ayib2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="guil9kbnw"/><path class="xl4ayib2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:autodesk-logo-1"} {...others} />);
}

export default Component;
