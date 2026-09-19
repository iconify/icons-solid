import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbgiv_bno.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="kbgiv_bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrow-up-arrow-down-circle-fill"} {...others} />);
}

export default Component;
