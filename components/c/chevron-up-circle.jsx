import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajwjw6b4q.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="ajwjw6b4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:chevron-up-circle"} {...others} />);
}

export default Component;
