import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phu1k1bve.css';
import '../../css/t/t1zst8bsl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="phu1k1bve"/><path clip-rule="evenodd" class="t1zst8bsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-luau"} {...others} />);
}

export default Component;
