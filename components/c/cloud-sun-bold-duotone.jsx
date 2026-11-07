import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb7vvlbro.css';
import '../../css/y/y7ajkhrwp.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="qb7vvlbro"/><path class="y7ajkhrwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-sun-bold-duotone"} {...others} />);
}

export default Component;
