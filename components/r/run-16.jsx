import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx8-v0blk.css';
import '../../css/a/amiveibiz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bx8-v0blk"/><path clip-rule="evenodd" class="amiveibiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:run-16"} {...others} />);
}

export default Component;
