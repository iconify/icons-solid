import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls0it7-zx.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ls0it7-zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:croisant"} {...others} />);
}

export default Component;
