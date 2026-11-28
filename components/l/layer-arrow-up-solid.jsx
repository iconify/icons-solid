import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo9hxn6zd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qo9hxn6zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layer-arrow-up-solid"} {...others} />);
}

export default Component;
