import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbsg529cw.css';
import '../../css/z/zpickcuei.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jbsg529cw"/><path class="zpickcuei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:date"} {...others} />);
}

export default Component;
