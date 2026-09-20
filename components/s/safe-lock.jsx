import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yovaf8ljk.css';
import '../../css/b/b_ado9bqv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yovaf8ljk"/><path class="b_ado9bqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:safe-lock"} {...others} />);
}

export default Component;
