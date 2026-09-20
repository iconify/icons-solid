import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm-5mp_fc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mm-5mp_fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:briefcase"} {...others} />);
}

export default Component;
