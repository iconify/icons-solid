import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-5-68xlv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-5-68xlv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:chart-no-axes-combined"} {...others} />);
}

export default Component;
