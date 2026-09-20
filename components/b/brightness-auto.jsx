import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dba5qkt6i.css';
import '../../css/m/mr_3cfc1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dba5qkt6i"/><path class="mr_3cfc1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brightness-auto"} {...others} />);
}

export default Component;
