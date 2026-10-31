import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdjn3ebky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdjn3ebky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:workflow-fill-round"} {...others} />);
}

export default Component;
