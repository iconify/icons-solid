import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xou8yqrqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xou8yqrqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:numbers-4-1"} {...others} />);
}

export default Component;
