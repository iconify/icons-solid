import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyc9-xbym.css';
import '../../css/u/uou3acccj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vyc9-xbym"/><path class="uou3acccj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevron-first-bold"} {...others} />);
}

export default Component;
