import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh21a-bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gh21a-bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:upload-square-1-bold"} {...others} />);
}

export default Component;
