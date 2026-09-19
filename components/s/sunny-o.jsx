import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrgg98-gn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrgg98-gn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:sunny-o"} {...others} />);
}

export default Component;
