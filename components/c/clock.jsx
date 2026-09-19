import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru9ga46bg.css';
import '../../css/b/bii6hxbls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ru9ga46bg"/><path clip-rule="evenodd" class="bii6hxbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:clock"} {...others} />);
}

export default Component;
