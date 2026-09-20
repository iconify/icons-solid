import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arv8vqxqi.css';
import '../../css/u/unzzytgtj.css';
import '../../css/z/zlbcxblav.css';
import '../../css/o/oi-ny7boa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="arv8vqxqi"><path class="unzzytgtj"/><path class="zlbcxblav"/><path class="oi-ny7boa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:opentofu"} {...others} />);
}

export default Component;
