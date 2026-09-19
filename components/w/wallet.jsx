import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/jswg7kbdr.css';
import '../../css/u/uwhfkxbzt.css';
import '../../css/w/wc-56lbkw.css';
import '../../css/i/idjw04bqv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkRAeLdJU"><g class="rohhhzb0l"><path clip-rule="evenodd" class="jswg7kbdr"/><path class="uwhfkxbzt"/><path class="wc-56lbkw"/><path class="idjw04bqv"/></g></mask></defs><path mask="url(#SVGkRAeLdJU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:wallet"} {...others} />);
}

export default Component;
