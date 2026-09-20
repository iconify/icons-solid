import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc1_vptuz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cc1_vptuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:toilet-paper-solid"} {...others} />);
}

export default Component;
