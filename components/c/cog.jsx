import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wex2-nbre.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="wex2-nbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:cog"} {...others} />);
}

export default Component;
