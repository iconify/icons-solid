import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3z04ac9g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3z04ac9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:dictionarydotcom"} {...others} />);
}

export default Component;
