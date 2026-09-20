import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/totvf6b2e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="totvf6b2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:dental-chair"} {...others} />);
}

export default Component;
