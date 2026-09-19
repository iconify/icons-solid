import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guan1wbti.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="guan1wbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:galaxyalt"} {...others} />);
}

export default Component;
