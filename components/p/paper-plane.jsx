import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ios-7vb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ios-7vb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:paper-plane"} {...others} />);
}

export default Component;
