import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf6uoi_3k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lf6uoi_3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:mobile-phone-15"} {...others} />);
}

export default Component;
