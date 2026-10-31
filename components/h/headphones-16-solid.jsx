import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mopkyd0bt.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="mopkyd0bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:headphones-16-solid"} {...others} />);
}

export default Component;
