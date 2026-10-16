import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ui8-015uj.css';
import '../../css/l/lo86mjbod.css';

const viewBox = {"width":57,"height":58};
const content = `<g class="ft5dv1b6b"><path class="ui8-015uj"/><path clip-rule="evenodd" class="lo86mjbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:label-studio"} {...others} />);
}

export default Component;
