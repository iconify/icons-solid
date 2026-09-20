import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jy14xpbli.css';
import '../../css/o/o-csnivgk.css';
import '../../css/i/itbh3jwmp.css';
import '../../css/c/cwbq75bkc.css';
import '../../css/e/e3h0hbbyh.css';
import '../../css/d/d6zrqnn1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jy14xpbli"/><path class="o-csnivgk"/><path class="itbh3jwmp"/><path class="cwbq75bkc"/><path class="e3h0hbbyh"/><path class="d6zrqnn1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:book-open-bookmark"} {...others} />);
}

export default Component;
