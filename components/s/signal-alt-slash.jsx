import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdxn-ef5l.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="bdxn-ef5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:signal-alt-slash"} {...others} />);
}

export default Component;
