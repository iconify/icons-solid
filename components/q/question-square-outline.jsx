import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmytes_jh.css';
import '../../css/x/x41xvfi0c.css';
import '../../css/z/z79g45bsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmytes_jh"/><path class="x41xvfi0c"/><path clip-rule="evenodd" class="z79g45bsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:question-square-outline"} {...others} />);
}

export default Component;
