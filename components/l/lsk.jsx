import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6oc-mbql.css';
import '../../css/x/x4ukzbcus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z6oc-mbql"/><path class="x4ukzbcus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lsk"} {...others} />);
}

export default Component;
