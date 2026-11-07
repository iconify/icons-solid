import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgaa_tbxh.css';
import '../../css/l/lzylfm93k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tgaa_tbxh"/><path class="lzylfm93k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-open-bold"} {...others} />);
}

export default Component;
