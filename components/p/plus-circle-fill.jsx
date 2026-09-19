import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4m9grbzw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r4m9grbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:plus-circle-fill"} {...others} />);
}

export default Component;
