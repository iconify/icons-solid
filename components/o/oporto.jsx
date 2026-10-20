import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzclhm7wd.css';
import '../../css/l/lv7wocbph.css';
import '../../css/c/cc4mncs3v.css';
import '../../css/n/n330h3bcs.css';

const viewBox = {"width":35.402,"height":11.519};
const content = `<path class="hzclhm7wd"/><path class="lv7wocbph"/><path class="cc4mncs3v"/><path class="n330h3bcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:oporto"} {...others} />);
}

export default Component;
