import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui8ehd76t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ui8ehd76t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:father-christmas-line"} {...others} />);
}

export default Component;
