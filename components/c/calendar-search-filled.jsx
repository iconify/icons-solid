import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwdovkx8c.css';
import '../../css/w/w3nlvcvue.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwdovkx8c"/><path class="w3nlvcvue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:calendar-search-filled"} {...others} />);
}

export default Component;
