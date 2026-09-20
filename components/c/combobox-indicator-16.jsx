import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2uonkolp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w2uonkolp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:combobox-indicator-16"} {...others} />);
}

export default Component;
