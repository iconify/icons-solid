import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqb7_60cr.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="zqb7_60cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:table-lamp-2-solid"} {...others} />);
}

export default Component;
