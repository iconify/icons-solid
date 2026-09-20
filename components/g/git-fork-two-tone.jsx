import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qhfdx-b0r.css';
import '../../css/y/yn9w9ccbt.css';
import '../../css/n/nb_n5ib0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qhfdx-b0r"/><path class="yn9w9ccbt"/><path class="nb_n5ib0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-fork-two-tone"} {...others} />);
}

export default Component;
