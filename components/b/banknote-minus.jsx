import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj0p3sbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fj0p3sbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:banknote-minus"} {...others} />);
}

export default Component;
