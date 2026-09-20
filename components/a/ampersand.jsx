import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0xrcvq2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0xrcvq2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ampersand"} {...others} />);
}

export default Component;
