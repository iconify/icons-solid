import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx7x4ac0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nx7x4ac0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:receive-square-filled"} {...others} />);
}

export default Component;
