import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8okp_dga.css';
import '../../css/o/o5ofv024l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z8okp_dga"/><path class="o5ofv024l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tools-kitchen-scale-bold"} {...others} />);
}

export default Component;
