import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mimxhhbzg.css';
import '../../css/l/l12r2ccpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mimxhhbzg"/><path class="l12r2ccpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:copy-solid"} {...others} />);
}

export default Component;
