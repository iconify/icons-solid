import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gip0dbbzp.css';
import '../../css/j/jqt93kblf.css';
import '../../css/k/kvq71usqv.css';
import '../../css/j/jpenxmdfq.css';
import '../../css/c/col9egjpk.css';
import '../../css/u/ukf8u-8fw.css';
import '../../css/h/hrlf7fdik.css';
import '../../css/o/o-nmoebhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gip0dbbzp"/><path class="jqt93kblf"/><path class="kvq71usqv"/><path class="jpenxmdfq"/><path class="col9egjpk"/><path class="ukf8u-8fw"/><path class="hrlf7fdik"/><path class="o-nmoebhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:space-astronaut"} {...others} />);
}

export default Component;
