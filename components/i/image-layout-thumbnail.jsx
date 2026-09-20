import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du55pnb9m.css';
import '../../css/o/od1iqpboh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="du55pnb9m"/><path class="od1iqpboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:image-layout-thumbnail"} {...others} />);
}

export default Component;
