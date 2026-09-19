import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/b/bkd7rf16l.css';
import '../../css/f/f4tcrjb5t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rjn-u5bcv"/><circle class="bkd7rf16l"/><path class="f4tcrjb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder-settings-one"} {...others} />);
}

export default Component;
