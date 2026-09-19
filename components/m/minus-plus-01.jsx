import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk9d0cz4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jk9d0cz4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:minus-plus-01"} {...others} />);
}

export default Component;
