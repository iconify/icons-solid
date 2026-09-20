import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/octq69bdd.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="octq69bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:square-11"} {...others} />);
}

export default Component;
