import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejk70mm4e.css';
import '../../css/a/agnov_a2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejk70mm4e"/><path class="agnov_a2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:unfi"} {...others} />);
}

export default Component;
