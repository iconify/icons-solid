import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laopiwk5n.css';
import '../../css/n/nboie9b2d.css';
import '../../css/b/bfjxetbbw.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="laopiwk5n"/><path class="nboie9b2d"/><path class="bfjxetbbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:images-sharp"} {...others} />);
}

export default Component;
