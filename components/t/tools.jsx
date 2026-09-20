import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xwgqus_7g.css';
import '../../css/y/yn37abcju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xwgqus_7g"/><path class="yn37abcju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tools"} {...others} />);
}

export default Component;
