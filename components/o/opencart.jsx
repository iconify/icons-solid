import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quriywp9a.css';

const viewBox = {"width":33,"height":24};
const content = `<path class="quriywp9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:opencart"} {...others} />);
}

export default Component;
