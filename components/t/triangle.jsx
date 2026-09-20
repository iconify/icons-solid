import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-4dk0bin.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-4dk0bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:triangle"} {...others} />);
}

export default Component;
