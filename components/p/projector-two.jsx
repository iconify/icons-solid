import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lzcyy-hlv.css';
import '../../css/e/edfg9vbrl.css';
import '../../css/w/wfrx6abev.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2i6VodwG"><g class="rohhhzb0l"><path class="lzcyy-hlv"/><path class="edfg9vbrl"/><circle class="wfrx6abev"/></g></mask></defs><path mask="url(#SVG2i6VodwG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:projector-two"} {...others} />);
}

export default Component;
