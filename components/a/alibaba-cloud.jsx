import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmumx4xkz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmumx4xkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:alibaba-cloud"} {...others} />);
}

export default Component;
