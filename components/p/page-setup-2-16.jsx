import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5xia0bqe.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="z5xia0bqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:page-setup-2-16"} {...others} />);
}

export default Component;
