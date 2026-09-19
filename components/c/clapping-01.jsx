import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm3dx-j5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nm3dx-j5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clapping-01"} {...others} />);
}

export default Component;
