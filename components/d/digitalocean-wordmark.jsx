import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al88j65bh.css';
import '../../css/j/jd1srsr7p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="al88j65bh"/><path class="jd1srsr7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:digitalocean-wordmark"} {...others} />);
}

export default Component;
