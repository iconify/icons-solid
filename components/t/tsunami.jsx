import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es6v1qf0v.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="es6v1qf0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:tsunami"} {...others} />);
}

export default Component;
