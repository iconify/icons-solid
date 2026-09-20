import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o80r8jpae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o80r8jpae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ab-download-manager"} {...others} />);
}

export default Component;
