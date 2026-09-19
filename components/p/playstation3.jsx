import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it8p9ubjn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="it8p9ubjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:playstation3"} {...others} />);
}

export default Component;
