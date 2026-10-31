import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wblsxceup.css';
import '../../css/t/t3bae-38y.css';
import '../../css/o/ovk9uybhs.css';
import '../../css/u/ut-furcmy.css';
import '../../css/m/m-0awcbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wblsxceup wm-shadow"/><path class="t3bae-38y wm-shadow"/><path class="ovk9uybhs"/><path class="ut-furcmy"/><path class="m-0awcbcl wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list-plus"} {...others} />);
}

export default Component;
