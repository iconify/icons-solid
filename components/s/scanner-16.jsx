import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkh1ubbwh.css';
import '../../css/n/nzqt12bbz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="lkh1ubbwh"/><path clip-rule="evenodd" class="nzqt12bbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:scanner-16"} {...others} />);
}

export default Component;
