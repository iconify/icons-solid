import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f3v4tybxo.css';
import '../../css/w/w3m_3tb8c.css';
import '../../css/a/ajuvr4bok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f3v4tybxo"/><path class="w3m_3tb8c"/><path class="ajuvr4bok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-unlock-01"} {...others} />);
}

export default Component;
