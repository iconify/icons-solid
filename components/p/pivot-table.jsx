import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/j64j94bol.css';
import '../../css/l/lg_3hrbjz.css';
import '../../css/h/hbtezcj3h.css';
import '../../css/q/qvzqv0bxn.css';
import '../../css/e/eg7jz2bwt.css';
import '../../css/o/o32m7o_mq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqNJsrdBC"><g class="rohhhzb0l"><path class="j64j94bol"/><path class="lg_3hrbjz"/><path class="hbtezcj3h"/><path class="qvzqv0bxn"/><path class="eg7jz2bwt"/><path class="o32m7o_mq"/></g></mask></defs><path mask="url(#SVGqNJsrdBC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pivot-table"} {...others} />);
}

export default Component;
