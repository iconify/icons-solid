import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/omot7ibmd.css';
import '../../css/y/ywkxnfbui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="omot7ibmd"/><path class="ywkxnfbui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:package-box-close"} {...others} />);
}

export default Component;
