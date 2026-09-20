import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xptr09bzt.css';
import '../../css/j/jb3m4w-5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xptr09bzt"/><path class="jb3m4w-5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:checkup-list"} {...others} />);
}

export default Component;
