import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlhlbkp3l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zlhlbkp3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:yes-alt"} {...others} />);
}

export default Component;
