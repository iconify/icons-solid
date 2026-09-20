import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/j/jfdz753ks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><circle class="tcwe4ewrv"/><path class="jfdz753ks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-alt"} {...others} />);
}

export default Component;
