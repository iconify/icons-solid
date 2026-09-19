import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm84pkbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jm84pkbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-long-left-solid"} {...others} />);
}

export default Component;
