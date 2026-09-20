import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qat35xbas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qat35xbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:gallery-horizontal-end"} {...others} />);
}

export default Component;
