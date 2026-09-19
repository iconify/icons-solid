import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_4ecru_n.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="x_4ecru_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:trash-slash-fill"} {...others} />);
}

export default Component;
