import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulh3m2ilf.css';
import '../../css/k/kxvistblb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulh3m2ilf"/><path clip-rule="evenodd" class="kxvistblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:pedal-outlines-24"} {...others} />);
}

export default Component;
