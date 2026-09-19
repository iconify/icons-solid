import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qx451ac5x.css';
import '../../css/s/sq_622bov.css';
import '../../css/r/rp1r7sbyy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIesDJbIM"><g class="rohhhzb0l"><path clip-rule="evenodd" class="qx451ac5x"/><path class="sq_622bov"/><path class="rp1r7sbyy"/></g></mask></defs><path mask="url(#SVGIesDJbIM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sperm"} {...others} />);
}

export default Component;
