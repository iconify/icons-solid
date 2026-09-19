import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m_zz76bfy.css';
import '../../css/m/mx92pe19y.css';
import '../../css/x/x3eovt8ab.css';

const viewBox = {"width":17,"height":17};
const content = `<g transform="translate(1 2)" class="n1lsf0bnc"><path class="m_zz76bfy"/><path class="mx92pe19y"/><ellipse class="x3eovt8ab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:bicycle-man"} {...others} />);
}

export default Component;
