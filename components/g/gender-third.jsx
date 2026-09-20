import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-2xq4bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-2xq4bfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gender-third"} {...others} />);
}

export default Component;
