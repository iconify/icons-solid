import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6n_bnpss.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s6n_bnpss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:arxiv"} {...others} />);
}

export default Component;
