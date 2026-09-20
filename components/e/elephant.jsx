import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/of6gbftai.css';
import '../../css/j/j11l97rrr.css';
import '../../css/d/dd5twob4r.css';
import '../../css/p/pmml4bcwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="of6gbftai"/><path class="j11l97rrr"/><path class="dd5twob4r"/><path class="pmml4bcwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:elephant"} {...others} />);
}

export default Component;
