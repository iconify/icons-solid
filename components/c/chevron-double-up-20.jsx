import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whfucbber.css';
import '../../css/v/v1vmo492j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="whfucbber"/><path class="v1vmo492j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chevron-double-up-20"} {...others} />);
}

export default Component;
