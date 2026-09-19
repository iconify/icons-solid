import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmw12wbqr.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="bmw12wbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:sad-cry"} {...others} />);
}

export default Component;
