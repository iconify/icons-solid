import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iixmlmb6g.css';
import '../../css/i/iluxt_bwt.css';
import '../../css/d/druc0kylj.css';
import '../../css/n/nna6okght.css';

const viewBox = {"width":290,"height":85};
const content = `<path class="iixmlmb6g"/><path class="iluxt_bwt"/><path class="druc0kylj"/><path class="nna6okght"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ben-and-jerrys"} {...others} />);
}

export default Component;
