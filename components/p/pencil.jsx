import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb0i8bcuz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kb0i8bcuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:pencil"} {...others} />);
}

export default Component;
