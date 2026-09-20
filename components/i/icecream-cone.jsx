import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/g7rh5ubwg.css';
import '../../css/a/alt7-0ukg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="g7rh5ubwg"/><path class="alt7-0ukg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:icecream-cone"} {...others} />);
}

export default Component;
