import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb5qhfflw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nb5qhfflw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:playstation-4"} {...others} />);
}

export default Component;
