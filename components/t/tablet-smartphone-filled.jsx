import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1se8tbgo.css';
import '../../css/q/qje49sx-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m1se8tbgo"/><path class="qje49sx-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tablet-smartphone-filled"} {...others} />);
}

export default Component;
