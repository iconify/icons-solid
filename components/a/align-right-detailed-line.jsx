import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd_-2rbla.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cd_-2rbla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:align-right-detailed-line"} {...others} />);
}

export default Component;
