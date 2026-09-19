import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlmg-pvsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlmg-pvsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:rice-cracker"} {...others} />);
}

export default Component;
