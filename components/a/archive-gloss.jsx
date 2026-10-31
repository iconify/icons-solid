import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yth53kq-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yth53kq-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:archive-gloss"} {...others} />);
}

export default Component;
