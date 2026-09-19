import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/u5e3l5bit.css';
import '../../css/p/prcyvtp0k.css';
import '../../css/x/xoijl9b-u.css';
import '../../css/k/k632om9ve.css';
import '../../css/b/b-5jm2b1s.css';
import '../../css/o/o5wyabbqw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="u5e3l5bit"/><path class="prcyvtp0k"/><path class="xoijl9b-u"/><path class="k632om9ve"/><path class="b-5jm2b1s"/><path class="o5wyabbqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hanger-one"} {...others} />);
}

export default Component;
