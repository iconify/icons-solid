import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l0iv5qv-o.css';
import '../../css/g/g-76qub2o.css';
import '../../css/g/gtph3kbym.css';
import '../../css/i/i-rgeyj1u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="l0iv5qv-o"/><path class="g-76qub2o"/><path class="gtph3kbym"/><path class="i-rgeyj1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:stamp"} {...others} />);
}

export default Component;
