import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdidb4b8e.css';
import '../../css/j/jt195abqe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zdidb4b8e"/><path clip-rule="evenodd" class="jt195abqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:header-16"} {...others} />);
}

export default Component;
