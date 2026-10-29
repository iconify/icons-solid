import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o73_nl1ec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o73_nl1ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ruler-solid"} {...others} />);
}

export default Component;
