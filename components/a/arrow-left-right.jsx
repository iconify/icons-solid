import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds6f2iupw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ds6f2iupw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:arrow-left-right"} {...others} />);
}

export default Component;
