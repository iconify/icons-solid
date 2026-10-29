import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4oss2bsv.css';
import '../../css/h/hkly8r6yp.css';
import '../../css/x/x3tzvpboa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4oss2bsv wm-k"/><path class="hkly8r6yp wm-k"/><path class="wm-k x3tzvpboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bold"} {...others} />);
}

export default Component;
