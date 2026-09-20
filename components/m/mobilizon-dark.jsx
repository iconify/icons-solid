import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eli3gqb5j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eli3gqb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mobilizon-dark"} {...others} />);
}

export default Component;
