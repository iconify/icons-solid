import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jos6di89e.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="jos6di89e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:waste-basket-11"} {...others} />);
}

export default Component;
