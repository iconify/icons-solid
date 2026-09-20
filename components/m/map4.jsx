import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ne6tv2bae.css';
import '../../css/a/aljjbkbrw.css';
import '../../css/c/c43zb7w6c.css';
import '../../css/l/lc8svxanw.css';
import '../../css/s/shibjqb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ne6tv2bae"/><path class="aljjbkbrw"/><path class="c43zb7w6c"/><path class="lc8svxanw"/><path class="shibjqb6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:map4"} {...others} />);
}

export default Component;
