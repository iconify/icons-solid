import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnjvkf51v.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="rnjvkf51v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:politics-vote-2-solid"} {...others} />);
}

export default Component;
