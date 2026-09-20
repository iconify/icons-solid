import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/c/chggfvtub.css';
import '../../css/j/jp9jvzb3o.css';
import '../../css/j/jgoyljbra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="chggfvtub"/><path class="jp9jvzb3o"/><path class="jgoyljbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:safety-flame-right"} {...others} />);
}

export default Component;
