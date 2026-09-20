import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9cz7dbxp.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="c9cz7dbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:doctors-bag"} {...others} />);
}

export default Component;
