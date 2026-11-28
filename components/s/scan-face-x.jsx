import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udnf6hbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udnf6hbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:scan-face-x"} {...others} />);
}

export default Component;
