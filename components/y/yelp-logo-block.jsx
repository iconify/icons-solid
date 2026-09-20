import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa422ab5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wa422ab5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:yelp-logo-block"} {...others} />);
}

export default Component;
