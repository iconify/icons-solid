import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0nf99xsy.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="t0nf99xsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:boolean-intersect"} {...others} />);
}

export default Component;
