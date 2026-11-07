import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpe08f7jm.css';
import '../../css/j/jj7xoyfhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mpe08f7jm"/><path clip-rule="evenodd" class="jj7xoyfhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-branch-bold-duotone"} {...others} />);
}

export default Component;
