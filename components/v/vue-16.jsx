import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9n-sr3np.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v9n-sr3np"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:vue-16"} {...others} />);
}

export default Component;
