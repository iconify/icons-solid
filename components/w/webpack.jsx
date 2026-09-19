import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8j3y9bdo.css';

const viewBox = {"width":22,"height":24};
const content = `<path class="w8j3y9bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:webpack"} {...others} />);
}

export default Component;
