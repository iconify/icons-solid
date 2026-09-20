import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz7flgdjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yz7flgdjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:transfer-right"} {...others} />);
}

export default Component;
