import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4egcmb2x.css';

const viewBox = {"width":24,"height":25};
const content = `<path clip-rule="evenodd" class="m4egcmb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:unfold-vertical-outline"} {...others} />);
}

export default Component;
