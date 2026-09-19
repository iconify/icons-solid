import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb9ajhbky.css';
import '../../css/w/w_7rm3j9j.css';
import '../../css/f/f_t5h2bth.css';
import '../../css/i/i2ck-cb3c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kb9ajhbky"/><path class="w_7rm3j9j"/><path class="f_t5h2bth"/><path class="i2ck-cb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:annotation-visibility"} {...others} />);
}

export default Component;
