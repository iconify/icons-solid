import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq9id9bvf.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="wq9id9bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:balloon-remix"} {...others} />);
}

export default Component;
