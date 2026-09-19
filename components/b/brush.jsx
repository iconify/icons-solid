import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4-o-n52b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4-o-n52b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:brush"} {...others} />);
}

export default Component;
