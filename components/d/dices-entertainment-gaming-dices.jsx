import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yl48r-bud.css';
import '../../css/y/ypz-jachr.css';
import '../../css/g/gm81x5ikh.css';
import '../../css/f/fwt7-pbvy.css';
import '../../css/r/rvxzrubmd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yl48r-bud"/><path class="ypz-jachr"/><path class="gm81x5ikh"/><path class="fwt7-pbvy"/><path class="rvxzrubmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dices-entertainment-gaming-dices"} {...others} />);
}

export default Component;
