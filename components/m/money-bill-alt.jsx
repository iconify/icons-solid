import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni6jdebub.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ni6jdebub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:money-bill-alt"} {...others} />);
}

export default Component;
