import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvxttdb3n.css';
import '../../css/e/e6e9s9jif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvxttdb3n"/><path class="e6e9s9jif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:edit-solid"} {...others} />);
}

export default Component;
