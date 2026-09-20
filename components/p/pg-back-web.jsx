import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/budvc5b6l.css';
import '../../css/e/e98i9obai.css';
import '../../css/t/t_qhaj-wh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="budvc5b6l"/><path class="e98i9obai"/><path class="t_qhaj-wh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pg-back-web"} {...others} />);
}

export default Component;
