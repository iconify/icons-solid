import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vry51s4gb.css';
import '../../css/w/wxx5nhb-e.css';
import '../../css/a/amd21sbho.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="vry51s4gb"/><circle class="wxx5nhb-e"/><path class="amd21sbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:drink"} {...others} />);
}

export default Component;
