import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5bp7pmdg.css';
import '../../css/z/z5-9hkvso.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l5bp7pmdg"/><path class="z5-9hkvso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:diskette"} {...others} />);
}

export default Component;
