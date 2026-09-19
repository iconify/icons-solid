import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g54-yzbwf.css';
import '../../css/f/fvmq27bls.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g54-yzbwf"/><path class="fvmq27bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:download-solid"} {...others} />);
}

export default Component;
