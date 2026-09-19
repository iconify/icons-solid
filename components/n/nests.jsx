import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/goqdtdzdl.css';
import '../../css/f/fl1nyqhqr.css';
import '../../css/s/st4dpqblu.css';
import '../../css/p/pe2o9olpl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="goqdtdzdl"/><path clip-rule="evenodd" class="fl1nyqhqr"/><path clip-rule="evenodd" class="st4dpqblu"/><path clip-rule="evenodd" class="pe2o9olpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nests"} {...others} />);
}

export default Component;
