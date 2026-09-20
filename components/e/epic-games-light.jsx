import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq1nlq5hz.css';

const viewBox = {"width":25.548,"height":29.501,"left":3.227,"top":1.25};
const content = `<path class="eq1nlq5hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:epic-games-light"} {...others} />);
}

export default Component;
