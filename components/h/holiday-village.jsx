import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2rc8bbax.css';
import '../../css/s/skkebdnpw.css';

const viewBox = {"width":36,"height":24};
const content = `<path class="z2rc8bbax"/><path class="skkebdnpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:holiday-village"} {...others} />);
}

export default Component;
