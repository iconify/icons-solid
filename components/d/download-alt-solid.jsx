import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra69dbbfc.css';
import '../../css/u/u0vmqablo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ra69dbbfc"/><path class="u0vmqablo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:download-alt-solid"} {...others} />);
}

export default Component;
