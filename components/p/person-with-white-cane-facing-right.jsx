import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6ygb96zu.css';
import '../../css/s/saol7rb8i.css';
import '../../css/h/h49yzab-b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v6ygb96zu"/><path class="saol7rb8i"/><path class="h49yzab-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-with-white-cane-facing-right"} {...others} />);
}

export default Component;
