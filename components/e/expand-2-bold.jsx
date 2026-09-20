import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4cletbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4cletbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:expand-2-bold"} {...others} />);
}

export default Component;
