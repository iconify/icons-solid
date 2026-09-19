import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg-_peskw.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="vg-_peskw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:text-document-inverted"} {...others} />);
}

export default Component;
