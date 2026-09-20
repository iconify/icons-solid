import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjg6pjb6n.css';
import '../../css/x/xel-33c3d.css';
import '../../css/y/y6-cd8pdo.css';
import '../../css/w/weyl7jbms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bjg6pjb6n"/><circle class="xel-33c3d"/><circle class="y6-cd8pdo"/><circle class="weyl7jbms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chield-alt-duotone"} {...others} />);
}

export default Component;
