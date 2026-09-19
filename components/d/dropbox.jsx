import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjsl_rbqf.css';
import '../../css/a/aypvy6buw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gjsl_rbqf"/><path class="aypvy6buw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:dropbox"} {...others} />);
}

export default Component;
