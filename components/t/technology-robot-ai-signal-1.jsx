import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2pwpobeg.css';
import '../../css/c/cppen0opw.css';
import '../../css/j/j48i5u89u.css';
import '../../css/z/z0tdqsb0j.css';
import '../../css/g/gu2hqrblc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g2pwpobeg"/><path class="cppen0opw"/><path class="j48i5u89u"/><path class="z0tdqsb0j"/><path class="gu2hqrblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:technology-robot-ai-signal-1"} {...others} />);
}

export default Component;
