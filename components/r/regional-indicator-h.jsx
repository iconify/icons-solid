import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htu6zoakn.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/s/sk_bn9biv.css';
import '../../css/t/t608wthfd.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="htu6zoakn"/><g class="bc5-xubfs"><circle class="sk_bn9biv"/><path class="t608wthfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-h"} {...others} />);
}

export default Component;
