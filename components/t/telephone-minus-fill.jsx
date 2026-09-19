import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od5_hmb1a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="od5_hmb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:telephone-minus-fill"} {...others} />);
}

export default Component;
