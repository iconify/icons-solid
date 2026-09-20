import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry5r86ipa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ry5r86ipa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:coderabbit"} {...others} />);
}

export default Component;
