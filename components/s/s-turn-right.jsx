import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/v2d09-zvp.css';
import '../../css/w/w-mxnd3nu.css';
import '../../css/m/mdbt_xbjk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjQPZ6cCO"><g class="rohhhzb0l"><path class="v2d09-zvp"/><path class="w-mxnd3nu"/><circle transform="rotate(-180 37.176 10)" class="mdbt_xbjk"/></g></mask></defs><path mask="url(#SVGjQPZ6cCO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:s-turn-right"} {...others} />);
}

export default Component;
