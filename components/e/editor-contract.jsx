import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwdebdc6m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jwdebdc6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:editor-contract"} {...others} />);
}

export default Component;
