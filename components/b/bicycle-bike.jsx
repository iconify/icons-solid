import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qaghrdi4p.css';
import '../../css/x/xcq-4cmff.css';
import '../../css/y/y039xzmpo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qaghrdi4p"/><path class="xcq-4cmff"/><path class="y039xzmpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bicycle-bike"} {...others} />);
}

export default Component;
