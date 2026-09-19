import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bff2ntb-c.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bff2ntb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:basketball"} {...others} />);
}

export default Component;
