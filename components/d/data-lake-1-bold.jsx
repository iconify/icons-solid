import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efndmsbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="efndmsbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-lake-1-bold"} {...others} />);
}

export default Component;
