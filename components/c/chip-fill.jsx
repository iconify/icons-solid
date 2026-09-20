import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzt_2ac2s.css';
import '../../css/v/vyl_3wa6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzt_2ac2s"/><path class="vyl_3wa6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:chip-fill"} {...others} />);
}

export default Component;
