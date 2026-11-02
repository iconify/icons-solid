import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2buqlbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y2buqlbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:align-horizontal-distribute-start-fill"} {...others} />);
}

export default Component;
