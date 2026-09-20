import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8z9q-b8u.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="b8z9q-b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:oillamp"} {...others} />);
}

export default Component;
