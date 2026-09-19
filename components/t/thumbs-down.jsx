import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/j3ito7b_n.css';
import '../../css/s/sabn5_cyt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="j3ito7b_n"/><path class="sabn5_cyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:thumbs-down"} {...others} />);
}

export default Component;
