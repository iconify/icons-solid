import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbmn2oygh.css';

const viewBox = {"width":9,"height":16};
const content = `<path class="zbmn2oygh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:caretright"} {...others} />);
}

export default Component;
