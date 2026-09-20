import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oahu7obbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oahu7obbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rainbow-off"} {...others} />);
}

export default Component;
