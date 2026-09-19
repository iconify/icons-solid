import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gldgrx7rq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gldgrx7rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:female-sign"} {...others} />);
}

export default Component;
