import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enqd_6bdd.css';

const viewBox = {"width":1084,"height":1074};
const content = `<path class="enqd_6bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:accountantos-light"} {...others} />);
}

export default Component;
