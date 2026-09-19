import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qibh9ubbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qibh9ubbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:snowflake-alt"} {...others} />);
}

export default Component;
