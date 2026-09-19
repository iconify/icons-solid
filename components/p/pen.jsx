import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d59qz9bmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d59qz9bmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:pen"} {...others} />);
}

export default Component;
