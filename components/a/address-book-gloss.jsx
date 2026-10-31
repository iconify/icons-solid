import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp3np7bqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp3np7bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:address-book-gloss"} {...others} />);
}

export default Component;
