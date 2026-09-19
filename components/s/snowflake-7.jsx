import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lalqpdp_l.css';
import '../../css/f/f8sr_ibol.css';

const viewBox = {"width":22,"height":24};
const content = `<path class="lalqpdp_l"/><path class="f8sr_ibol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:snowflake-7"} {...others} />);
}

export default Component;
