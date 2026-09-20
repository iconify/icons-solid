import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsv7j_bli.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tsv7j_bli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-round-outline"} {...others} />);
}

export default Component;
