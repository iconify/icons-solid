import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f90ii8o0l.css';
import '../../css/b/blcntivod.css';
import '../../css/i/if-72qbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f90ii8o0l"/><circle class="blcntivod"/><path class="if-72qbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:breast-pump"} {...others} />);
}

export default Component;
