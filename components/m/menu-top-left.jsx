import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaaeg5bei.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="qaaeg5bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:menu-top-left"} {...others} />);
}

export default Component;
