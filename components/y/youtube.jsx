import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dblasrb2v.css';
import '../../css/w/wxc7mbbhr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="to-5kdesz"><path class="dblasrb2v"/><path class="wxc7mbbhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:youtube"} {...others} />);
}

export default Component;
