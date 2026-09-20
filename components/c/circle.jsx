import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7gl5qb5p.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="r7gl5qb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:circle"} {...others} />);
}

export default Component;
