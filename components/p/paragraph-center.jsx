import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2pg_dqyb.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="c2pg_dqyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:paragraph-center"} {...others} />);
}

export default Component;
