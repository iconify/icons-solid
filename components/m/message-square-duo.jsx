import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjd2x0bfl.css';
import '../../css/j/jjkgeh70e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjd2x0bfl secondary"/><path class="jjkgeh70e primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-square-duo"} {...others} />);
}

export default Component;
