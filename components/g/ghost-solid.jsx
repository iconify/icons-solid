import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqxx1w4em.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hqxx1w4em"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ghost-solid"} {...others} />);
}

export default Component;
