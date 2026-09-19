import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/rq-pdnbgd.css';
import '../../css/k/kc7k11b7s.css';
import '../../css/p/pho2bqbtn.css';
import '../../css/e/ecnmmgqom.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="rq-pdnbgd"/><path class="kc7k11b7s"/><path class="pho2bqbtn"/><path class="ecnmmgqom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:guide-board"} {...others} />);
}

export default Component;
