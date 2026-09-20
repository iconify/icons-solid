import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/om42epbiw.css';
import '../../css/k/kinx7jb3n.css';
import '../../css/a/a5ugidbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="om42epbiw"/><path class="kinx7jb3n"/><path class="a5ugidbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:document-previous"} {...others} />);
}

export default Component;
