import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cgsr2cbuw.css';
import '../../css/w/w1tl90f_h.css';
import '../../css/z/zxwjn7b8j.css';
import '../../css/g/g1hkxrb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cgsr2cbuw"/><path class="w1tl90f_h"/><path class="zxwjn7b8j"/><path class="g1hkxrb8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:form-edition-clipboard-check"} {...others} />);
}

export default Component;
