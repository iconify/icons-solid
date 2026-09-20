import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lq-vfcc-t.css';
import '../../css/t/t1u28vndk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lq-vfcc-t"/><path class="t1u28vndk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-connection-fill"} {...others} />);
}

export default Component;
