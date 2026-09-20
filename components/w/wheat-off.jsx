import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qw_1nvbkg.css';
import '../../css/y/yoka-v70c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qw_1nvbkg"/><path class="yoka-v70c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:wheat-off"} {...others} />);
}

export default Component;
