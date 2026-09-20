import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly2d8dboy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ly2d8dboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-double-up"} {...others} />);
}

export default Component;
