import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fnh7pssfp.css';
import '../../css/w/wz_4lh3kd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fnh7pssfp"/><path class="wz_4lh3kd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:cloud"} {...others} />);
}

export default Component;
