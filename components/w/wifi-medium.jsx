import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rozo3-b3m.css';
import '../../css/w/w70la6bye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="rozo3-b3m"/><path class="w70la6bye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:wifi-medium"} {...others} />);
}

export default Component;
