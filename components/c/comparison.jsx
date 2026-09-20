import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4g7fn3kg.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="z4g7fn3kg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:comparison"} {...others} />);
}

export default Component;
