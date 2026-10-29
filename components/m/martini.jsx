import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s1l5a3baz.css';
import '../../css/a/af6vrvbxh.css';
import '../../css/f/f9cq2cc0w.css';
import '../../css/s/skq-4gbyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s1l5a3baz"/><path class="af6vrvbxh"/><path class="f9cq2cc0w"/><path class="skq-4gbyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:martini"} {...others} />);
}

export default Component;
