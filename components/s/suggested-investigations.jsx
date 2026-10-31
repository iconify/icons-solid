import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0r7aeb5z.css';
import '../../css/p/p_n_-nbql.css';
import '../../css/q/qu3n-1kvd.css';
import '../../css/u/u7os-98fh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r0r7aeb5z"/><circle class="p_n_-nbql"/><circle class="qu3n-1kvd"/><circle class="u7os-98fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:suggested-investigations"} {...others} />);
}

export default Component;
