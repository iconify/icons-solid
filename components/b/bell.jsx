import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfsug6rjk.css';
import '../../css/j/jej7e325s.css';
import '../../css/f/fpvpjcd5p.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="qfsug6rjk"/><path class="jej7e325s"/><path class="fpvpjcd5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:bell"} {...others} />);
}

export default Component;
