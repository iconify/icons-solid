import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7hrptk6n.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="n7hrptk6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:step-backward-20-solid"} {...others} />);
}

export default Component;
