import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwkw435-x.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zwkw435-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:doc-expand"} {...others} />);
}

export default Component;
