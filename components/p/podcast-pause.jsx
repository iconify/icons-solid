import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8hhc1bqm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8hhc1bqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:podcast-pause"} {...others} />);
}

export default Component;
