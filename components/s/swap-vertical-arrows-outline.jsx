import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9rze1izo.css';

const viewBox = {"width":24,"height":25};
const content = `<path clip-rule="evenodd" class="a9rze1izo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:swap-vertical-arrows-outline"} {...others} />);
}

export default Component;
