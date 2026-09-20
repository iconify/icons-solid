import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkvpl8bch.css';
import '../../css/j/j6h96-z2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkvpl8bch"/><path class="j6h96-z2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:chat-add-24"} {...others} />);
}

export default Component;
