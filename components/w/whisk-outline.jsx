import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6ow-cbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n6ow-cbfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:whisk-outline"} {...others} />);
}

export default Component;
