import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5iwp7g-g.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="z5iwp7g-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:checkbox-blank"} {...others} />);
}

export default Component;
