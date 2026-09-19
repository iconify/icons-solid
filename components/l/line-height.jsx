import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xit4yh0_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xit4yh0_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:line-height"} {...others} />);
}

export default Component;
