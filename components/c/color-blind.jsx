import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ak8kneg9y.css';
import '../../css/y/yepekh46m.css';
import '../../css/n/nnlo_903k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ak8kneg9y"/><path class="yepekh46m"/><path class="nnlo_903k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:color-blind"} {...others} />);
}

export default Component;
