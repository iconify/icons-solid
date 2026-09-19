import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/row95eb5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="row95eb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:tape-option"} {...others} />);
}

export default Component;
