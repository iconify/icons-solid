import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btwot6bhb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="btwot6bhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:ellipsis-h"} {...others} />);
}

export default Component;
