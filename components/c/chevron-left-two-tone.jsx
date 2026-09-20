import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lflyau5pe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lflyau5pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevron-left-two-tone"} {...others} />);
}

export default Component;
