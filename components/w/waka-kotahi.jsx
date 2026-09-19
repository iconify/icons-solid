import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya5a489_p.css';
import '../../css/m/md0kk7b9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ya5a489_p"/><path class="md0kk7b9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:waka-kotahi"} {...others} />);
}

export default Component;
