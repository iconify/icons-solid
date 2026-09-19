import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7aa6e__k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v7aa6e__k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:globe-americas-fill"} {...others} />);
}

export default Component;
