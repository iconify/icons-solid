import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh8_sbcku.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="lh8_sbcku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:circle-user"} {...others} />);
}

export default Component;
