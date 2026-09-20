import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlu6r6v-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlu6r6v-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:audiobook"} {...others} />);
}

export default Component;
