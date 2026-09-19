import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcn8ucyih.css';
import '../../css/j/j62e8oyno.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bcn8ucyih"/><path class="j62e8oyno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:lightning"} {...others} />);
}

export default Component;
