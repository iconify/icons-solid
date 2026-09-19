import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0s_31-tx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z0s_31-tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:peace-fill"} {...others} />);
}

export default Component;
