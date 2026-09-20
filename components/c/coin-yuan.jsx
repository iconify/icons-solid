import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yvt-cfbxg.css';
import '../../css/w/w47ts_bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yvt-cfbxg"/><path class="w47ts_bhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:coin-yuan"} {...others} />);
}

export default Component;
