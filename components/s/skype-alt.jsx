import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au1cl9ewo.css';
import '../../css/j/j6u-38b7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="au1cl9ewo"/><path class="j6u-38b7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:skype-alt"} {...others} />);
}

export default Component;
