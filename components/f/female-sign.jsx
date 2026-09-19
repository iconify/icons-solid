import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i12ljv2bc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i12ljv2bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:female-sign"} {...others} />);
}

export default Component;
