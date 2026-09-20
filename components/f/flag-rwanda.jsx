import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqa97brp.css';
import '../../css/p/pfo-r6bra.css';
import '../../css/q/qo3825brw.css';
import '../../css/h/hkxlkqbvt.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnqa97brp"/><path class="pfo-r6bra"/><path class="qo3825brw"/><path class="hkxlkqbvt"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-rwanda"} {...others} />);
}

export default Component;
