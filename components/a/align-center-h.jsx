import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg-xv732t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wg-xv732t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:align-center-h"} {...others} />);
}

export default Component;
