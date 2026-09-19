import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/x/xf4evypyg.css';
import '../../css/h/h5tuzsbby.css';
import '../../css/r/runb99r6d.css';
import '../../css/w/wkk1ksb4p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="xf4evypyg"/><path class="h5tuzsbby"/><path class="runb99r6d"/><path class="wkk1ksb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shovel-one"} {...others} />);
}

export default Component;
