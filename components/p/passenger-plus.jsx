import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byk5dy4fd.css';
import '../../css/b/b4d3mc68f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="byk5dy4fd"/><path class="b4d3mc68f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:passenger-plus"} {...others} />);
}

export default Component;
