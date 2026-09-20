import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vjlo9pbii.css';
import '../../css/t/tsag75lsy.css';
import '../../css/n/nx5xs9buk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vjlo9pbii"/><path clip-rule="evenodd" class="tsag75lsy"/><path clip-rule="evenodd" class="nx5xs9buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medical-kit-outline"} {...others} />);
}

export default Component;
