import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmzcyxbor.css';
import '../../css/c/cdw1yt0dr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hmzcyxbor"/><path class="cdw1yt0dr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mobi"} {...others} />);
}

export default Component;
