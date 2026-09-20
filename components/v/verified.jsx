import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8e-hpsks.css';
import '../../css/u/u5iqbwz8l.css';
import '../../css/w/w2tr5mu5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q8e-hpsks"/><path class="u5iqbwz8l"/><path class="w2tr5mu5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:verified"} {...others} />);
}

export default Component;
