import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miu2v2oim.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="miu2v2oim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:split"} {...others} />);
}

export default Component;
