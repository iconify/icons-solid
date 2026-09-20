import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm81rxbus.css';
import '../../css/o/otjlhglbh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lm81rxbus"/><path class="otjlhglbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:html5-dark"} {...others} />);
}

export default Component;
