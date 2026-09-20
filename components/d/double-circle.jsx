import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j27il7k2r.css';
import '../../css/b/b_eyzomgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect class="j27il7k2r"/><rect class="b_eyzomgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:double-circle"} {...others} />);
}

export default Component;
