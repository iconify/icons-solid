import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2crndbgo.css';
import '../../css/c/c3jcscciy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y2crndbgo"/><path class="c3jcscciy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cr-nmaster-light"} {...others} />);
}

export default Component;
