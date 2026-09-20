import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txfzqa3vh.css';
import '../../css/o/ooafjrbnh.css';
import '../../css/m/mqpsn0bso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txfzqa3vh"/><path class="ooafjrbnh"/><path class="mqpsn0bso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:face-grin"} {...others} />);
}

export default Component;
