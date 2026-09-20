import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5ef9db-k.css';
import '../../css/o/odnck4blw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j5ef9db-k"/><path class="odnck4blw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:generate-content"} {...others} />);
}

export default Component;
