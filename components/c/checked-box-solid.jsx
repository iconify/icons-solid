import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok-0j3bcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ok-0j3bcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:checked-box-solid"} {...others} />);
}

export default Component;
