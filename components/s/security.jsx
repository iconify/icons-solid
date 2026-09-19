import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rulstbbgo.css';
import '../../css/c/c3te-ab8q.css';
import '../../css/x/x35msp2lf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rulstbbgo"/><path class="c3te-ab8q"/><path class="x35msp2lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:security"} {...others} />);
}

export default Component;
