import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/srkf9gb2m.css';
import '../../css/a/au6ciacvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="srkf9gb2m"/><path class="au6ciacvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-circle-selection-02"} {...others} />);
}

export default Component;
