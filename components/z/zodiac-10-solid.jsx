import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fah1b-_sv.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fah1b-_sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:zodiac-10-solid"} {...others} />);
}

export default Component;
