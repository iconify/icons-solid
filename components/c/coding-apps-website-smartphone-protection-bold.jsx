import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuw1l-bwe.css';
import '../../css/n/n1trkpqad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kuw1l-bwe"/><path class="n1trkpqad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-smartphone-protection-bold"} {...others} />);
}

export default Component;
