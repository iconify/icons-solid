import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avmdd1a9m.css';
import '../../css/m/muh-rkjda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(45 8.9 11.21)" class="avmdd1a9m"/><path class="muh-rkjda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:syringe"} {...others} />);
}

export default Component;
