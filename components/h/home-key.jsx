import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lw45_bbvm.css';
import '../../css/z/zqg1rvg1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lw45_bbvm"/><path class="zqg1rvg1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-key"} {...others} />);
}

export default Component;
