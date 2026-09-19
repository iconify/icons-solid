import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlqpo7b7g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tlqpo7b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bucket-fill"} {...others} />);
}

export default Component;
