import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg9c4xx5n.css';
import '../../css/y/y_xndqb9y.css';
import '../../css/w/wtbpydbzy.css';
import '../../css/q/qf8a_6bcc.css';
import '../../css/w/wc7xnpb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cg9c4xx5n"/><path class="y_xndqb9y"/><path class="wtbpydbzy"/><path class="qf8a_6bcc"/><path class="wc7xnpb5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:auto"} {...others} />);
}

export default Component;
