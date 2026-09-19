import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpn7v4c7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cpn7v4c7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:dots-horizontal"} {...others} />);
}

export default Component;
