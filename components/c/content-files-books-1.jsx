import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-k63k_qn.css';
import '../../css/o/o6237vu6u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k-k63k_qn"/><path class="o6237vu6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-books-1"} {...others} />);
}

export default Component;
