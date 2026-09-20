import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kgc9d5hyw.css';
import '../../css/r/r6mffv2pr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kgc9d5hyw"/><path class="r6mffv2pr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:padlock-square-2"} {...others} />);
}

export default Component;
