import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_qc69tco.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="a_qc69tco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:watch-square-menu-solid"} {...others} />);
}

export default Component;
