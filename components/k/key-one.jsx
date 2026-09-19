import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/ac3gokhkl.css';
import '../../css/m/mqgl1bc0v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="ac3gokhkl"/><path class="mqgl1bc0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:key-one"} {...others} />);
}

export default Component;
