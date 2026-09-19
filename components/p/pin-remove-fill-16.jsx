import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egzvq3_2v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="egzvq3_2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pin-remove-fill-16"} {...others} />);
}

export default Component;
