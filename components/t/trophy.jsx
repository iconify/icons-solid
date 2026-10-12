import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ipjlxd4mw.css';
import '../../css/a/a9gtzumat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ipjlxd4mw"/><path class="a9gtzumat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:trophy"} {...others} />);
}

export default Component;
