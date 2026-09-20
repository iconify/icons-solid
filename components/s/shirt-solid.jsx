import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkcc6b92k.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tkcc6b92k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:shirt-solid"} {...others} />);
}

export default Component;
