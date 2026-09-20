import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9_-x2-td.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z9_-x2-td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:align-left-duotone"} {...others} />);
}

export default Component;
