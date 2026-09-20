import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq4cvr6jb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tq4cvr6jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:dumbbell"} {...others} />);
}

export default Component;
