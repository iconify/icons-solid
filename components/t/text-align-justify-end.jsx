import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg_n4mbcr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cg_n4mbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:text-align-justify-end"} {...others} />);
}

export default Component;
