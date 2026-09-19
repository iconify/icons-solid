import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqoi1y9qd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bqoi1y9qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:abstract-outlined"} {...others} />);
}

export default Component;
