import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yxz1-5b4p.css';
import '../../css/x/x7xjjq43t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yxz1-5b4p"/><path class="x7xjjq43t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folders"} {...others} />);
}

export default Component;
