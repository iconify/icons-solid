import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cskt0qfga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cskt0qfga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sd-card-solid"} {...others} />);
}

export default Component;
