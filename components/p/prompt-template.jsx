import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs1so-b4l.css';
import '../../css/w/wobm3acef.css';
import '../../css/x/x5lbktbtf.css';
import '../../css/h/hzem-r0io.css';
import '../../css/v/vjbvj13aq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bs1so-b4l"/><circle class="wobm3acef"/><circle class="x5lbktbtf"/><circle class="hzem-r0io"/><path class="vjbvj13aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:prompt-template"} {...others} />);
}

export default Component;
