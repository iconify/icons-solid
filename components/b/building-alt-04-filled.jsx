import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2boa_bql.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2boa_bql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:building-alt-04-filled"} {...others} />);
}

export default Component;
