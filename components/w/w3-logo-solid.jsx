import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa1ioi0ng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oa1ioi0ng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:w3-logo-solid"} {...others} />);
}

export default Component;
