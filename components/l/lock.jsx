import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk9mcoe9t.css';

const viewBox = {"width":1152,"height":1408};
const content = `<path class="fk9mcoe9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:lock"} {...others} />);
}

export default Component;
