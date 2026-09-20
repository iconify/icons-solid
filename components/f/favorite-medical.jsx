import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bkc5h8-sk.css';
import '../../css/p/pmuix798g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bkc5h8-sk"/><path class="pmuix798g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:favorite-medical"} {...others} />);
}

export default Component;
