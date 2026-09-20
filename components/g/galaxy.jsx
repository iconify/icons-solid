import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ygy5zxbcw.css';
import '../../css/q/qf193fb5c.css';
import '../../css/z/ze8u81bii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ygy5zxbcw"/><path class="qf193fb5c"/><path class="ze8u81bii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:galaxy"} {...others} />);
}

export default Component;
