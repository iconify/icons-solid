import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usxi8y_4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="usxi8y_4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:heart"} {...others} />);
}

export default Component;
