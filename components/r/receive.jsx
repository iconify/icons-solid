import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/x/xy8i4w10j.css';
import '../../css/w/wlqvjmcwi.css';
import '../../css/t/tx7e6g5tu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAIFe7bVL"><g class="hv130ab-t"><path class="xy8i4w10j"/><path class="wlqvjmcwi"/><path class="tx7e6g5tu"/></g></mask></defs><path mask="url(#SVGAIFe7bVL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:receive"} {...others} />);
}

export default Component;
