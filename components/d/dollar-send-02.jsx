import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv-j_2b-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fv-j_2b-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dollar-send-02"} {...others} />);
}

export default Component;
