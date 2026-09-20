import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y56n58bbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y56n58bbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:arrows-v"} {...others} />);
}

export default Component;
