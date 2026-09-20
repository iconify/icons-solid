import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tld_fzzem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tld_fzzem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:yen-diamond-solid"} {...others} />);
}

export default Component;
