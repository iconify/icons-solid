import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z90fo5wsb.css';
import '../../css/m/m6oc2ft_g.css';
import '../../css/z/zdhv0v6dm.css';
import '../../css/y/yv8-koben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z90fo5wsb"/><path class="m6oc2ft_g"/><path class="zdhv0v6dm"/><path class="yv8-koben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-question-mark"} {...others} />);
}

export default Component;
