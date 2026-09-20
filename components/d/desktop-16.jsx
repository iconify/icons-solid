import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekuwo8vtc.css';
import '../../css/a/a5pezv9ha.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ekuwo8vtc"/><path clip-rule="evenodd" class="a5pezv9ha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:desktop-16"} {...others} />);
}

export default Component;
