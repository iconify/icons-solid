import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4uiwqbnk.css';
import '../../css/i/it_a7iblf.css';
import '../../css/z/z1wf33p3v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b4uiwqbnk"/><path class="it_a7iblf"/><path class="z1wf33p3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:transportation-motorcycle"} {...others} />);
}

export default Component;
