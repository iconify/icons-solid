import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1-r8ou6u.css';
import '../../css/r/rjpmsmbhz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1-r8ou6u"/><path class="rjpmsmbhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rake"} {...others} />);
}

export default Component;
