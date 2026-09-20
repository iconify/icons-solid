import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xzntu9doz.css';
import '../../css/e/e12r68bme.css';
import '../../css/g/gn31iacux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xzntu9doz"/><path class="e12r68bme"/><path clip-rule="evenodd" class="gn31iacux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-bold"} {...others} />);
}

export default Component;
