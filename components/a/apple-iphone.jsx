import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw8fk__of.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zw8fk__of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:apple-iphone"} {...others} />);
}

export default Component;
