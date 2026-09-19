import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/j/j657_1wqq.css';
import '../../css/o/o5g359bjg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGopdtwbIm"><g class="hv130ab-t"><path class="j657_1wqq"/><path class="o5g359bjg"/></g></mask></defs><path mask="url(#SVGopdtwbIm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:flash-payment"} {...others} />);
}

export default Component;
