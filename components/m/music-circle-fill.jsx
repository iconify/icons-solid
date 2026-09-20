import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk4qgdbux.css';
import '../../css/t/tevsa0mrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fk4qgdbux"/><path class="tevsa0mrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:music-circle-fill"} {...others} />);
}

export default Component;
