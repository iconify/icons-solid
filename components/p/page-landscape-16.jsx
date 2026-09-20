import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-2m00b1v.css';
import '../../css/a/a9p3m-d8x.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="u-2m00b1v"/><path clip-rule="evenodd" class="a9p3m-d8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:page-landscape-16"} {...others} />);
}

export default Component;
