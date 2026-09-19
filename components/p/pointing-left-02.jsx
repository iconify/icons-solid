import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zncj4gwdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zncj4gwdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pointing-left-02"} {...others} />);
}

export default Component;
