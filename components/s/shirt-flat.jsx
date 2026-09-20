import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5i8w33gv.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="j5i8w33gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:shirt-flat"} {...others} />);
}

export default Component;
