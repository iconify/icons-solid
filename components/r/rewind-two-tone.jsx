import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v85bn7bst.css';
import '../../css/a/a01qzhb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v85bn7bst"/><path class="a01qzhb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rewind-two-tone"} {...others} />);
}

export default Component;
