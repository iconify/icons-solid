import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyyeipb0v.css';
import '../../css/m/m8caoebdb.css';
import '../../css/c/cl10rdbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vyyeipb0v"/><path class="m8caoebdb"/><path class="cl10rdbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:stateful-set"} {...others} />);
}

export default Component;
