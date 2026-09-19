import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r07gb5b7z.css';
import '../../css/k/kev4430ki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r07gb5b7z"/><path class="kev4430ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-checkbox-minus"} {...others} />);
}

export default Component;
