import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_pkd94hu.css';
import '../../css/o/o-08tibye.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j_pkd94hu"/><path class="o-08tibye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-open-bold"} {...others} />);
}

export default Component;
