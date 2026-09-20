import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmmo2nbmg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qmmo2nbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:ellipsis-h"} {...others} />);
}

export default Component;
