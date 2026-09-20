import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upt_ysqso.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="upt_ysqso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:text-square-solid"} {...others} />);
}

export default Component;
