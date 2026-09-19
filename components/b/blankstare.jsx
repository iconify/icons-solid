import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxuw8rb3x.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bxuw8rb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:blankstare"} {...others} />);
}

export default Component;
