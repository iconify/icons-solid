import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kqvci1mhd.css';
import '../../css/o/oid8iybsi.css';
import '../../css/h/hp3cd6c2e.css';
import '../../css/w/wkuj-qlry.css';
import '../../css/u/uk2mcffto.css';
import '../../css/r/rc-pskbto.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kqvci1mhd"/><path class="oid8iybsi"/><path class="hp3cd6c2e"/><path class="wkuj-qlry"/><path class="uk2mcffto"/><path class="rc-pskbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:gameboy"} {...others} />);
}

export default Component;
