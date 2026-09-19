import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avw58lqaf.css';

const viewBox = {"width":1472,"height":1792};
const content = `<path class="avw58lqaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:sort-numeric-asc"} {...others} />);
}

export default Component;
