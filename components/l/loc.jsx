import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2an1vf6x.css';
import '../../css/k/k82zah-zg.css';
import '../../css/n/nnnq0zm1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2an1vf6x"/><path class="k82zah-zg"/><path class="nnnq0zm1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:loc"} {...others} />);
}

export default Component;
