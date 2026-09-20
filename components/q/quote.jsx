import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2lxspncn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h2lxspncn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:quote"} {...others} />);
}

export default Component;
