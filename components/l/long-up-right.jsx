import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktyj-1b6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktyj-1b6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:long-up-right"} {...others} />);
}

export default Component;
