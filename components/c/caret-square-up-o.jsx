import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cflr1ab0i.css';
import '../../css/z/zi_-u-bqq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cflr1ab0i"/><path class="zi_-u-bqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:caret-square-up-o"} {...others} />);
}

export default Component;
