import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0_qoqb-s.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="n0_qoqb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:video"} {...others} />);
}

export default Component;
