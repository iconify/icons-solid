import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qogpt6bsd.css';
import '../../css/t/txanzxb9i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path clip-rule="evenodd" class="qogpt6bsd"/><path class="txanzxb9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cut"} {...others} />);
}

export default Component;
