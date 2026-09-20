import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj99t9bgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xj99t9bgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:arrows-up-down"} {...others} />);
}

export default Component;
