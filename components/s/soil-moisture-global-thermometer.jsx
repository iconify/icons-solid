import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znrbtj4ko.css';
import '../../css/w/wuhkh627w.css';
import '../../css/j/jwnqwzbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="znrbtj4ko"/><path class="wuhkh627w"/><path class="jwnqwzbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:soil-moisture-global-thermometer"} {...others} />);
}

export default Component;
