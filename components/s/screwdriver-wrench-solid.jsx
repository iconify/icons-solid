import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds6j52bpe.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ds6j52bpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:screwdriver-wrench-solid"} {...others} />);
}

export default Component;
