import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7hym0q5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7hym0q5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chevron-up-box"} {...others} />);
}

export default Component;
