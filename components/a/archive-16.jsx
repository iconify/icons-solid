import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha4662b3c.css';
import '../../css/k/kn0-ukb4s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ha4662b3c"/><path clip-rule="evenodd" class="kn0-ukb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:archive-16"} {...others} />);
}

export default Component;
