import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzob4b76j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzob4b76j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:light-strip-variant"} {...others} />);
}

export default Component;
