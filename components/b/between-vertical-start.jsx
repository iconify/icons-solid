import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uoc97ab0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uoc97ab0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:between-vertical-start"} {...others} />);
}

export default Component;
