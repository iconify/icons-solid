import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl4i9x41k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gl4i9x41k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-top-left-3-square-light"} {...others} />);
}

export default Component;
