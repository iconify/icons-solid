import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zw578v39g.css';
import '../../css/x/x-2izub3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="zw578v39g"/><path class="x-2izub3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-x"} {...others} />);
}

export default Component;
