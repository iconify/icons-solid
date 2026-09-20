import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwl9r7h4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwl9r7h4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:north-west-line"} {...others} />);
}

export default Component;
