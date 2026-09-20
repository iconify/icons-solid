import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvy7wv0fh.css';
import '../../css/q/qnudf1dbo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mvy7wv0fh"/><path clip-rule="evenodd" class="qnudf1dbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:boolean-intersect-16"} {...others} />);
}

export default Component;
