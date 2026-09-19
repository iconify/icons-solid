import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qeulqbctk.css';

const viewBox = {"width":22,"height":24};
const content = `<path class="qeulqbctk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:snowflake-4"} {...others} />);
}

export default Component;
