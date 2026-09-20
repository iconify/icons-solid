import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/y/y4s8dq4pl.css';
import '../../css/e/eheuvvbdy.css';
import '../../css/n/n8z6fbc2v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="y4s8dq4pl"/><path class="eheuvvbdy"/><path class="n8z6fbc2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:photo-file-2"} {...others} />);
}

export default Component;
