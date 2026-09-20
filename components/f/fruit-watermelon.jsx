import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bdpj-bprc.css';
import '../../css/b/bokv6tbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bdpj-bprc"/><path class="bokv6tbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fruit-watermelon"} {...others} />);
}

export default Component;
