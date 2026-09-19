import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox5bagm_m.css';
import '../../css/a/a-uqmqb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ox5bagm_m"/><path class="a-uqmqb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:medical-kit"} {...others} />);
}

export default Component;
