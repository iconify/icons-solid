import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/py-mm7brh.css';
import '../../css/e/e97y91bpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="py-mm7brh"/><path class="e97y91bpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pasta-bowl-warm"} {...others} />);
}

export default Component;
