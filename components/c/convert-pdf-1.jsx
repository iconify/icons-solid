import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s_p8uqbpj.css';
import '../../css/h/hym_4ccwu.css';
import '../../css/k/kxoxc4wya.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="s_p8uqbpj"/><path class="hym_4ccwu"/><path class="kxoxc4wya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:convert-pdf-1"} {...others} />);
}

export default Component;
