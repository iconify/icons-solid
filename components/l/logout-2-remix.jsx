import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7zk5xjil.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j7zk5xjil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:logout-2-remix"} {...others} />);
}

export default Component;
