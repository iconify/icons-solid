import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi24mtzvc.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="zi24mtzvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:y-square"} {...others} />);
}

export default Component;
