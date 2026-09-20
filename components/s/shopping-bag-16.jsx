import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhg79_kue.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="uhg79_kue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:shopping-bag-16"} {...others} />);
}

export default Component;
