import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j01r4uprb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j01r4uprb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:share-outline"} {...others} />);
}

export default Component;
