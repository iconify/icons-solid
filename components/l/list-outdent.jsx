import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-scgcc9i.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="v-scgcc9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:list-outdent"} {...others} />);
}

export default Component;
