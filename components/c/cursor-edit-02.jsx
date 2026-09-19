import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jrmw6phxs.css';
import '../../css/g/gpt8o555j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="jrmw6phxs"/><path class="gpt8o555j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-edit-02"} {...others} />);
}

export default Component;
