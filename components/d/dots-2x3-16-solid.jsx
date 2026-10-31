import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjgd94-9s.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="pjgd94-9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:dots-2x3-16-solid"} {...others} />);
}

export default Component;
