import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ta5echf4d.css';
import '../../css/m/mxpdy7boc.css';
import '../../css/w/wxoe-ccvl.css';
import '../../css/o/on9a5ksue.css';
import '../../css/i/im0r5vbnv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh3nILcqj"><g class="ft5dv1b6b"><path class="ta5echf4d"/><rect class="mxpdy7boc"/><path class="wxoe-ccvl"/><rect class="on9a5ksue"/><path class="im0r5vbnv"/></g></mask></defs><path mask="url(#SVGh3nILcqj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:city"} {...others} />);
}

export default Component;
