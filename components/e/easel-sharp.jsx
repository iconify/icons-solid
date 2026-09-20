import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7bg-j5tn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w7bg-j5tn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:easel-sharp"} {...others} />);
}

export default Component;
