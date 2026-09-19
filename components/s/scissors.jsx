import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2ia2bbar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2ia2bbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:scissors"} {...others} />);
}

export default Component;
