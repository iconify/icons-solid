import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf70tib7y.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="kf70tib7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:h6-20-solid"} {...others} />);
}

export default Component;
