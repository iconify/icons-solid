import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlvz2mwag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zlvz2mwag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:gap-horizontal"} {...others} />);
}

export default Component;
