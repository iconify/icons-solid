import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wym4_cc3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wym4_cc3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:building-2-gloss"} {...others} />);
}

export default Component;
