import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yul2lzr6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yul2lzr6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:battery-charging-02"} {...others} />);
}

export default Component;
