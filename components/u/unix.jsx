import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgj4jib6k.css';
import '../../css/h/h5p52qoon.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hgj4jib6k"/><path class="h5p52qoon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:unix"} {...others} />);
}

export default Component;
