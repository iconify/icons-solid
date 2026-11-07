import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlwu39hpt.css';
import '../../css/b/b466brbyk.css';
import '../../css/l/l2iaarb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlwu39hpt"/><path class="b466brbyk"/><path class="l2iaarb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:umbrella-bold"} {...others} />);
}

export default Component;
