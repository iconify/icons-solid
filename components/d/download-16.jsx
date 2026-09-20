import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a05-frb-a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a05-frb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:download-16"} {...others} />);
}

export default Component;
