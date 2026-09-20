import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngda-7gsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngda-7gsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:keep-a-changelog"} {...others} />);
}

export default Component;
