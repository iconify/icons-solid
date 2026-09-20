import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zni5_hulp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zni5_hulp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:house-chimney-bold"} {...others} />);
}

export default Component;
