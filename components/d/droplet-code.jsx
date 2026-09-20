import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe5ax8ult.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qe5ax8ult"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:droplet-code"} {...others} />);
}

export default Component;
