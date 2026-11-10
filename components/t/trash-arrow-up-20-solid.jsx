import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs1vf-b3c.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="bs1vf-b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:trash-arrow-up-20-solid"} {...others} />);
}

export default Component;
