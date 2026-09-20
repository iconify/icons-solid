import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z821b9bih.css';
import '../../css/h/haeexlbuc.css';
import '../../css/u/ubiksac-u.css';
import '../../css/e/eyimmqbyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z821b9bih"><path class="haeexlbuc"/><path class="ubiksac-u"/><path class="eyimmqbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:redux-selector"} {...others} />);
}

export default Component;
