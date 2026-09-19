import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2n_u8yaa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m2n_u8yaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:magnet-fill"} {...others} />);
}

export default Component;
