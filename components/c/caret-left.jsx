import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp3yqspdz.css';

const viewBox = {"width":576,"height":1280};
const content = `<path class="fp3yqspdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:caret-left"} {...others} />);
}

export default Component;
