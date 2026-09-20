import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljk3adyvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ljk3adyvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mug"} {...others} />);
}

export default Component;
