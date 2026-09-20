import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6jndybtz.css';
import '../../css/o/ocih1mz8r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y6jndybtz"/><path class="ocih1mz8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-browser-bold"} {...others} />);
}

export default Component;
