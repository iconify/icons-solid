import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acmnv-6wx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="acmnv-6wx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:curly-braces"} {...others} />);
}

export default Component;
