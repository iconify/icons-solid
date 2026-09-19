import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nldaqvbfh.css';
import '../../css/g/g4qvddbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nldaqvbfh"/><path class="g4qvddbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wrist-watch-round-alt-filled"} {...others} />);
}

export default Component;
