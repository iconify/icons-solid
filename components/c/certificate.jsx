import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vuz12tb0u.css';
import '../../css/a/admehqbfz.css';
import '../../css/n/ntmphvbwp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="vuz12tb0u"/><path class="admehqbfz"/><path class="ntmphvbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:certificate"} {...others} />);
}

export default Component;
