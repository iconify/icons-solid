import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrbkw7bqm.css';
import '../../css/o/oq2mp8bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zrbkw7bqm"/><path class="oq2mp8bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:notion"} {...others} />);
}

export default Component;
