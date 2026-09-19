import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcfqgs_zg.css';

const viewBox = {"width":580,"height":850};
const content = `<path class="rcfqgs_zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:bucket"} {...others} />);
}

export default Component;
