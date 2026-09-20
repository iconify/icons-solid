import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/yasgjhb6v.css';
import '../../css/g/g93zddctb.css';
import '../../css/p/pr64habpf.css';
import '../../css/t/tl0080xqi.css';
import '../../css/s/sw7893bst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="yasgjhb6v"/><path class="g93zddctb"/><path class="pr64habpf"/><path class="tl0080xqi"/><path class="sw7893bst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:radio"} {...others} />);
}

export default Component;
