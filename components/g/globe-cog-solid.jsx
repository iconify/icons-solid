import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v460hd2nj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v460hd2nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:globe-cog-solid"} {...others} />);
}

export default Component;
