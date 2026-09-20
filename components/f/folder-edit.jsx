import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ybgntz_nh.css';
import '../../css/d/dooqx60fq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ybgntz_nh"/><path class="dooqx60fq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-edit"} {...others} />);
}

export default Component;
