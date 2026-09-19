import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px1zdkb_w.css';
import '../../css/c/cxwvkfgrp.css';
import '../../css/o/oba9ctbou.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 px1zdkb_w"/><path class="clr-i-outline clr-i-outline-path-2 cxwvkfgrp"/><path class="clr-i-outline clr-i-outline-path-3 oba9ctbou"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:file-settings-line"} {...others} />);
}

export default Component;
