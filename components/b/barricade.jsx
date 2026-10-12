import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jo6-r4bwr.css';
import '../../css/w/wgrk3yble.css';
import '../../css/g/gurklgb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jo6-r4bwr"/><rect class="wgrk3yble"/><path class="gurklgb6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:barricade"} {...others} />);
}

export default Component;
