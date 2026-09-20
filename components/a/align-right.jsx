import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1a1a3ovb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a1a1a3ovb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:align-right"} {...others} />);
}

export default Component;
