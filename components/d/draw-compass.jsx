import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnwr_1bhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xnwr_1bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:draw-compass"} {...others} />);
}

export default Component;
