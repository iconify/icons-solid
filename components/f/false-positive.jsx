import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7-mkdg7y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="l7-mkdg7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:false-positive"} {...others} />);
}

export default Component;
