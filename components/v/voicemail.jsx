import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wt6ddqrsu.css';
import '../../css/y/yj8rovbyf.css';
import '../../css/n/nl66y9men.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="wt6ddqrsu"/><circle class="yj8rovbyf"/><path class="nl66y9men"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:voicemail"} {...others} />);
}

export default Component;
