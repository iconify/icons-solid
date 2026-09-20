import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v64eybbzz.css';
import '../../css/x/xfs-5sbwq.css';
import '../../css/w/wt11l5oqu.css';
import '../../css/o/okcqnab_u.css';
import '../../css/g/ggjuxvnzy.css';
import '../../css/n/n9bgwmbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v64eybbzz"/><path class="xfs-5sbwq"/><path class="wt11l5oqu"/><path class="okcqnab_u"/><path class="ggjuxvnzy"/><path class="n9bgwmbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:messages-bubble-square-subtract"} {...others} />);
}

export default Component;
