import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgcb9zw2l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lgcb9zw2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:pointer-down"} {...others} />);
}

export default Component;
