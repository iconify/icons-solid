import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpg043bpa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cpg043bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:yelp-logo-solid"} {...others} />);
}

export default Component;
