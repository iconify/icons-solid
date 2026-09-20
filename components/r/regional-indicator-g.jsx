import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htu6zoakn.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/v/vb7hlhboo.css';
import '../../css/r/rf2j4mm1f.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="htu6zoakn"/><g class="bc5-xubfs"><circle class="vb7hlhboo"/><path class="rf2j4mm1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-g"} {...others} />);
}

export default Component;
