import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwaub5_4j.css';
import '../../css/n/n2e4pyr7u.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMedicinesNegative0)" class="cuyn6tgcc"><path class="uwaub5_4j"/><path clip-rule="evenodd" class="n2e4pyr7u"/></g><defs><clipPath id="healthiconsMedicinesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medicines-negative"} {...others} />);
}

export default Component;
