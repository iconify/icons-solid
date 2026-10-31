import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd20j3kke.css';
import '../../css/w/wyopycldg.css';
import '../../css/y/y98trh81b.css';
import '../../css/h/hlvevhb-x.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="pd20j3kke"/><path class="wyopycldg"/><path class="y98trh81b"/><path class="hlvevhb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:togo"} {...others} />);
}

export default Component;
