import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yul4i8dug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yul4i8dug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:briefcase-plus"} {...others} />);
}

export default Component;
