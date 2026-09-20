import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgf6tkv2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qgf6tkv2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:emoji-alt-fill"} {...others} />);
}

export default Component;
