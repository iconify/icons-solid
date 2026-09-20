import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7o570b7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n7o570b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:share-forward-line"} {...others} />);
}

export default Component;
