import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/r63xy_b1u.css';
import '../../css/b/bba42ensl.css';
import '../../css/z/zlf3w3owk.css';
import '../../css/g/gfrskntlj.css';
import '../../css/k/k6ml-nekw.css';
import '../../css/z/zzo5b2bwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="r63xy_b1u"/><path class="bba42ensl"/><path class="zlf3w3owk"/><path class="gfrskntlj"/><path class="k6ml-nekw"/><path class="zzo5b2bwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:lost-and-found"} {...others} />);
}

export default Component;
