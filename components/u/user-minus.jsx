import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbeaf3bzp.css';
import '../../css/b/b3jjboblh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jbeaf3bzp"/><path class="b3jjboblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-minus"} {...others} />);
}

export default Component;
