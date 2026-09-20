import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drphl9x-c.css';
import '../../css/q/q6evf3_3i.css';
import '../../css/g/g-vas9vud.css';
import '../../css/h/ha2s1vbvi.css';
import '../../css/a/ay8131wny.css';
import '../../css/g/ggi7iyb9z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="drphl9x-c"/><path class="q6evf3_3i"/><path class="g-vas9vud"/><path class="ha2s1vbvi"/><circle class="ay8131wny"/><path class="ggi7iyb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:blue-book"} {...others} />);
}

export default Component;
