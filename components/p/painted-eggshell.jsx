import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4cxfdbcp.css';
import '../../css/j/juh0nb25u.css';
import '../../css/o/owe8oibat.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHlvrxbht"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="k4cxfdbcp"/><path class="juh0nb25u"/><path clip-rule="evenodd" class="owe8oibat"/></g></mask></defs><path mask="url(#SVGHlvrxbht)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:painted-eggshell"} {...others} />);
}

export default Component;
