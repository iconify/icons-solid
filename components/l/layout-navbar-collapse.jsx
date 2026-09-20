import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qx6dcbcwa.css';
import '../../css/t/t07r9k2qw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qx6dcbcwa"/><path class="t07r9k2qw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-navbar-collapse"} {...others} />);
}

export default Component;
