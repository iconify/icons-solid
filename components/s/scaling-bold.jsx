import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxiuf1b8p.css';
import '../../css/j/jq9qq8bcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rxiuf1b8p"/><path class="jq9qq8bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scaling-bold"} {...others} />);
}

export default Component;
