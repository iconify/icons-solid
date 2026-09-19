import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/effisz2bi.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wy6uykbfe.css';
import '../../css/f/fjou07z9l.css';
import '../../css/w/wahc0fb7b.css';
import '../../css/t/tby5dab0h.css';

const viewBox = {"width":100,"height":100};
const content = `<clipPath id="SVGlgah6cRj"><circle class="effisz2bi"/></clipPath><g clip-path="url(#SVGlgah6cRj)" clip-rule="evenodd" class="d2kvgvbvc"><circle class="wy6uykbfe"/><path class="fjou07z9l"/><path class="wahc0fb7b"/><path class="tby5dab0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:arrow"} {...others} />);
}

export default Component;
