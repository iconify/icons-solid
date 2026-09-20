import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt-9dzk5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wt-9dzk5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:powerpoint"} {...others} />);
}

export default Component;
