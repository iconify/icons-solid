import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4yq3qb3c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e4yq3qb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:globe-wire"} {...others} />);
}

export default Component;
