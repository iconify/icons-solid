import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhm9gv9uy.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="lhm9gv9uy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:tag-text"} {...others} />);
}

export default Component;
