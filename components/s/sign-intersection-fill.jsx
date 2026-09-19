import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfj89pb4x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zfj89pb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-intersection-fill"} {...others} />);
}

export default Component;
