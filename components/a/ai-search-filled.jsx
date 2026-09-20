import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpf5-09ok.css';
import '../../css/h/hpmvmqb-z.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="wpf5-09ok"/><path class="hpmvmqb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-search-filled"} {...others} />);
}

export default Component;
