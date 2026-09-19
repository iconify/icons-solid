import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eub6fxbql.css';
import '../../css/r/ru5kd0b9k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="eub6fxbql"/><path class="ru5kd0b9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:flag"} {...others} />);
}

export default Component;
