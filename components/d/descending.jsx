import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s8sv6ibgk.css';
import '../../css/z/zajaj2b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s8sv6ibgk"/><path class="zajaj2b9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:descending"} {...others} />);
}

export default Component;
