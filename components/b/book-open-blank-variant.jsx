import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at84vmbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="at84vmbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:book-open-blank-variant"} {...others} />);
}

export default Component;
