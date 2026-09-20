import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tsby9osmt.css';
import '../../css/e/e58_ef4xl.css';
import '../../css/l/lngmmbbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="tsby9osmt"/><path class="e58_ef4xl"/><path class="lngmmbbjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:sketch-logo"} {...others} />);
}

export default Component;
