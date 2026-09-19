import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahldpgp5a.css';

const viewBox = {"width":34,"height":24};
const content = `<path class="ahldpgp5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:quote-left"} {...others} />);
}

export default Component;
