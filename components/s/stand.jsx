import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9mtmgbiz.css';
import '../../css/u/uzumdnd2u.css';
import '../../css/c/cjyj7io4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="y9mtmgbiz"/><rect class="uzumdnd2u"/><path class="cjyj7io4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stand"} {...others} />);
}

export default Component;
