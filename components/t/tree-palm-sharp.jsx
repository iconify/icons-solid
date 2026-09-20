import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_lgukbzq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_lgukbzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tree-palm-sharp"} {...others} />);
}

export default Component;
