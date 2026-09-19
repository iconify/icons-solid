import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jaaaw1bso.css';
import '../../css/n/nlnn0ibiz.css';
import '../../css/t/txfhqbbeh.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jaaaw1bso"/><path class="nlnn0ibiz"/><path class="txfhqbbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:location-information"} {...others} />);
}

export default Component;
