import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/y/y-l0-obsm.css';
import '../../css/w/wbwjg0iif.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="y-l0-obsm"/><path class="wbwjg0iif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:box-waterproof"} {...others} />);
}

export default Component;
