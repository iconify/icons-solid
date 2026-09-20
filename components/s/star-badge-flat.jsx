import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiz3s5b_s.css';
import '../../css/w/wyegnpzky.css';
import '../../css/t/t1fi4d56m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iiz3s5b_s"/><path clip-rule="evenodd" class="wyegnpzky"/><path class="t1fi4d56m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:star-badge-flat"} {...others} />);
}

export default Component;
