import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i48ixpics.css';
import '../../css/q/q0dd0fvak.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i48ixpics"/><path class="q0dd0fvak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dosvault-dark"} {...others} />);
}

export default Component;
