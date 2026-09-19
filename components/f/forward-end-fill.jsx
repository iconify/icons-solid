import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agklg4i-q.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="agklg4i-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:forward-end-fill"} {...others} />);
}

export default Component;
