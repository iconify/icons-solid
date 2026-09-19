import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6e1gm-ze.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c6e1gm-ze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:trash"} {...others} />);
}

export default Component;
