import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl11knbwz.css';
import '../../css/m/m2ikeob3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fl11knbwz"/><path class="m2ikeob3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:programming-user-code"} {...others} />);
}

export default Component;
