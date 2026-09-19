import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f9os-_7eo.css';
import '../../css/c/cyclgcb9w.css';
import '../../css/c/cj9syra8m.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f9os-_7eo"/><path class="cyclgcb9w"/><path class="cj9syra8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:person-checkmark"} {...others} />);
}

export default Component;
