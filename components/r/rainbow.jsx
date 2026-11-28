import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq5o2cbej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dq5o2cbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:rainbow"} {...others} />);
}

export default Component;
