import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3ljkwbjb.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="b3ljkwbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:moustache-solid"} {...others} />);
}

export default Component;
