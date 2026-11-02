import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1gr_acfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1gr_acfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:contacts-fill"} {...others} />);
}

export default Component;
