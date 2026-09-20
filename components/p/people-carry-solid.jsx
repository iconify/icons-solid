import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjwxeybpm.css';
import '../../css/i/ifjc3lcbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjwxeybpm"/><path class="ifjc3lcbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:people-carry-solid"} {...others} />);
}

export default Component;
