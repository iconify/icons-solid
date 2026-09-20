import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh_1n6b9i.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="oh_1n6b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:todo-done"} {...others} />);
}

export default Component;
