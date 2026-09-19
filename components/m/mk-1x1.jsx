import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yapliwlbi.css';
import '../../css/i/iwjfocmqa.css';
import '../../css/m/mku189b4i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yapliwlbi"/><path class="iwjfocmqa"/><circle class="mku189b4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mk-1x1"} {...others} />);
}

export default Component;
