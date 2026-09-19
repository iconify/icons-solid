import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycfta7yog.css';
import '../../css/l/lwrzs1b5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ycfta7yog"/><path class="lwrzs1b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:globe-oceania"} {...others} />);
}

export default Component;
