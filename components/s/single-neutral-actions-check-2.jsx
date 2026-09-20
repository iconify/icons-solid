import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w49p_-bhh.css';
import '../../css/n/ng-m_ujnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w49p_-bhh"/><path class="ng-m_ujnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-neutral-actions-check-2"} {...others} />);
}

export default Component;
