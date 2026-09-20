import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhkncj6rg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhkncj6rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:flow-line-line"} {...others} />);
}

export default Component;
