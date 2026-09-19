import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nuv5q7dux.css';
import '../../css/l/lhllv9bxt.css';
import '../../css/d/dgn0rl2ke.css';
import '../../css/r/rdjwzdbya.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGI1w0Tb7L"><g class="rohhhzb0l"><path clip-rule="evenodd" class="nuv5q7dux"/><path class="lhllv9bxt"/><path class="dgn0rl2ke"/><path class="rdjwzdbya"/></g></mask></defs><path mask="url(#SVGI1w0Tb7L)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pyramid-one"} {...others} />);
}

export default Component;
