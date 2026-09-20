import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0cz6bb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0cz6bb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:rewind-octagon-solid"} {...others} />);
}

export default Component;
