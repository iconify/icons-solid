import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fitiderwm.css';
import '../../css/g/g8_by6k8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fitiderwm"/><path class="g8_by6k8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:sensitive-duotone"} {...others} />);
}

export default Component;
