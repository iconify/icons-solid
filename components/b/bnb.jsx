import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4v7p9bhx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y4v7p9bhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:bnb"} {...others} />);
}

export default Component;
