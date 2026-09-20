import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/db-zerbsw.css';
import '../../css/a/ae87ytbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="db-zerbsw"/><path class="ae87ytbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-pen-sharp-fill"} {...others} />);
}

export default Component;
