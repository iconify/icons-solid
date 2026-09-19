import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cap6jo47k.css';

const viewBox = {"width":1024,"height":704};
const content = `<path class="cap6jo47k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:piwigo"} {...others} />);
}

export default Component;
