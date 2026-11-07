import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5e6tzbau.css';
import '../../css/l/lg5xwxuqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p5e6tzbau"/><path clip-rule="evenodd" class="lg5xwxuqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:washing-machine-minimalistic-bold"} {...others} />);
}

export default Component;
