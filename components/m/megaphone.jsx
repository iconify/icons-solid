import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gia07u8ju.css';
import '../../css/o/o36ugrb1l.css';
import '../../css/d/de11ypbnr.css';
import '../../css/r/r7fkzcxyg.css';
import '../../css/p/pgkpv0b8c.css';
import '../../css/p/pb0y5qbjb.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s_k9bydwb.css';
import '../../css/i/ilt94wbql.css';
import '../../css/x/x1xouxb4n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gia07u8ju"/><path class="o36ugrb1l"/><path class="de11ypbnr"/><rect class="r7fkzcxyg"/><path class="pgkpv0b8c"/><path class="pb0y5qbjb"/><g class="jn8qy4bru"><path class="s_k9bydwb"/><rect class="ilt94wbql"/><path class="x1xouxb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:megaphone"} {...others} />);
}

export default Component;
