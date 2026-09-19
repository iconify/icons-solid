import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jaaaw1bso.css';
import '../../css/n/nlnn0ibiz.css';
import '../../css/f/fd5wudb5a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jaaaw1bso"/><path class="nlnn0ibiz"/><path class="fd5wudb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:delete-location"} {...others} />);
}

export default Component;
