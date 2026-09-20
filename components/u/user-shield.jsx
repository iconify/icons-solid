import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3w7ii3ov.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z3w7ii3ov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-shield"} {...others} />);
}

export default Component;
