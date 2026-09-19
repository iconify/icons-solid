import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtirc_mzq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qtirc_mzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:chicken"} {...others} />);
}

export default Component;
