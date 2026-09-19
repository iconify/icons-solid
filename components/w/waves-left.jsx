import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/e/ezm4tij9w.css';
import '../../css/d/dak6u4bwz.css';
import '../../css/y/y-d1b7lad.css';
import '../../css/y/yjnw3jb-n.css';
import '../../css/y/ygubgp9tm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="ezm4tij9w"/><path class="dak6u4bwz"/><path class="y-d1b7lad"/><path class="yjnw3jb-n"/><path class="ygubgp9tm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:waves-left"} {...others} />);
}

export default Component;
