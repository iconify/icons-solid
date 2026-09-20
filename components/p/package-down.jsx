import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf4wu4gsz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nf4wu4gsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:package-down"} {...others} />);
}

export default Component;
