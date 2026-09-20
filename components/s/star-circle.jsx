import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eawq5hbcr.css';
import '../../css/j/j27il7k2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eawq5hbcr"/><rect class="j27il7k2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:star-circle"} {...others} />);
}

export default Component;
