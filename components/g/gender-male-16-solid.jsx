import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax6hn1byu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ax6hn1byu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:gender-male-16-solid"} {...others} />);
}

export default Component;
