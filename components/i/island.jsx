import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eloxbjbhw.css';
import '../../css/v/vbr9v4bnn.css';
import '../../css/i/ivxtkuqms.css';

const viewBox = {"width":22,"height":24};
const content = `<path class="eloxbjbhw"/><path class="vbr9v4bnn"/><path class="ivxtkuqms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:island"} {...others} />);
}

export default Component;
