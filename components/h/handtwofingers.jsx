import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_xf5hb9r.css';

const viewBox = {"width":640,"height":1024};
const content = `<path class="y_xf5hb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:handtwofingers"} {...others} />);
}

export default Component;
