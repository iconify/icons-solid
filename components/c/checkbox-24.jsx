import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5ra11bdp.css';
import '../../css/l/lb-bssbki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5ra11bdp"/><path class="lb-bssbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:checkbox-24"} {...others} />);
}

export default Component;
