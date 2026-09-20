import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wu3_ufllg.css';
import '../../css/j/jkkdn5t7q.css';
import '../../css/e/ev-dp8mol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="wu3_ufllg"/><path class="jkkdn5t7q"/><path class="ev-dp8mol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:lineage-logo"} {...others} />);
}

export default Component;
