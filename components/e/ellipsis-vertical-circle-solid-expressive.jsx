import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv7f0p25w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kv7f0p25w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:ellipsis-vertical-circle-solid-expressive"} {...others} />);
}

export default Component;
