import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5hzsjb7y.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="v5hzsjb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:scale-unbalanced-flip"} {...others} />);
}

export default Component;
