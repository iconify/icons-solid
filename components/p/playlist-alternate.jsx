import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7cv9nkec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7cv9nkec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:playlist-alternate"} {...others} />);
}

export default Component;
