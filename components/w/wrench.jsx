import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bay2g0ldj.css';
import '../../css/m/mdo6_0bci.css';
import '../../css/i/ivqc4-ttx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bay2g0ldj"/><path class="mdo6_0bci"/><path class="ivqc4-ttx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:wrench"} {...others} />);
}

export default Component;
