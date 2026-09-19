import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3b5a86vl.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="a3b5a86vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:app-badge-fill"} {...others} />);
}

export default Component;
