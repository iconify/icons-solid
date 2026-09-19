import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqur7u31c.css';

const viewBox = {"width":304,"height":448};
const content = `<path class="gqur7u31c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:arrow-down"} {...others} />);
}

export default Component;
