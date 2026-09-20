import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be15c0mch.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="be15c0mch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:accessibility-16"} {...others} />);
}

export default Component;
