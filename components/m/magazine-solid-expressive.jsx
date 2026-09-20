import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc7j49bqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qc7j49bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:magazine-solid-expressive"} {...others} />);
}

export default Component;
