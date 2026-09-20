import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2zpr77lu.css';
import '../../css/q/qhpij3bsp.css';
import '../../css/o/ofnfaeuml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="b2zpr77lu"><path class="qhpij3bsp"/><path class="ofnfaeuml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:posthtml"} {...others} />);
}

export default Component;
