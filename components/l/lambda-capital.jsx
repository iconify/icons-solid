import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phu1nbjot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="phu1nbjot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:lambda-capital"} {...others} />);
}

export default Component;
