import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gt-j1ktag.css';
import '../../css/p/pwbhv0x_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gt-j1ktag"/><path class="pwbhv0x_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:corner-up-left-double"} {...others} />);
}

export default Component;
