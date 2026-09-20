import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v819m1itl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v819m1itl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-git-bold"} {...others} />);
}

export default Component;
