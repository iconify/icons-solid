import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiwn5ycja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aiwn5ycja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bluetooth-connected-solid"} {...others} />);
}

export default Component;
