import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv3b14b5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cv3b14b5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:qr-code-solid"} {...others} />);
}

export default Component;
