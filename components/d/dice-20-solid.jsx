import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5y2e5btw.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="u5y2e5btw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:dice-20-solid"} {...others} />);
}

export default Component;
