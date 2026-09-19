import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_1b6abit.css';
import '../../css/z/ztdsiac1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_1b6abit"/><path class="ztdsiac1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:owl"} {...others} />);
}

export default Component;
