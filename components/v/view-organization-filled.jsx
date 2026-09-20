import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/der5ev0pa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="der5ev0pa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:view-organization-filled"} {...others} />);
}

export default Component;
