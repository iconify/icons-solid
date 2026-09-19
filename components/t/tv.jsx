import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2eyd0b6f.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s2eyd0b6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:tv"} {...others} />);
}

export default Component;
