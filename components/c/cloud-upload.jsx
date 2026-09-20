import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2xcm6bdm.css';
import '../../css/j/j11lf1bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2xcm6bdm"/><path class="j11lf1bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cloud-upload"} {...others} />);
}

export default Component;
