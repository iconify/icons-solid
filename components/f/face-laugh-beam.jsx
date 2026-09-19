import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_qscfbju.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="c_qscfbju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:face-laugh-beam"} {...others} />);
}

export default Component;
