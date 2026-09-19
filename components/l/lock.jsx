import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/z/z9qk59bdu.css';
import '../../css/o/o41m9g48r.css';
import '../../css/h/hmcoah3hh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="z9qk59bdu"/><path class="o41m9g48r"/><path class="hmcoah3hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lock"} {...others} />);
}

export default Component;
