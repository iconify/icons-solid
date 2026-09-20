import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrjy2cbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wrjy2cbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:misskey-line"} {...others} />);
}

export default Component;
