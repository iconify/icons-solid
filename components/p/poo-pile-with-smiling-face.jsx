import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1pz6obmw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f1pz6obmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:poo-pile-with-smiling-face"} {...others} />);
}

export default Component;
