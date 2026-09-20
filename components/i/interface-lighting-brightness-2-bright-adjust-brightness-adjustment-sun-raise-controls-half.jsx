import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afgz_374z.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="afgz_374z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-lighting-brightness-2-bright-adjust-brightness-adjustment-sun-raise-controls-half"} {...others} />);
}

export default Component;
