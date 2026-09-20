import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/weha31b6b.css';
import '../../css/e/ee2t7xd7i.css';
import '../../css/q/qrtaw5usw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="weha31b6b"/><path class="ee2t7xd7i"/><path class="qrtaw5usw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:server-cog"} {...others} />);
}

export default Component;
