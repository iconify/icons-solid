import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/o6ivq-w2t.css';
import '../../css/d/dfyd2xg-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="o6ivq-w2t"/><path class="dfyd2xg-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-add-selection-02"} {...others} />);
}

export default Component;
