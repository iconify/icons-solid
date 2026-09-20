import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm83secra.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vm83secra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:archive-box-arrow-up-20-solid"} {...others} />);
}

export default Component;
