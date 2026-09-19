import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyl1n9beq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyl1n9beq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:arrows-expand-left"} {...others} />);
}

export default Component;
